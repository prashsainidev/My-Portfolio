const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const HASHNODE_BLOG_HOST = process.env.HASHNODE_BLOG_HOST;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedHashnode:
    "The request to Hashnode didn't succeed. Check if HASHNODE_BLOG_HOST in your .env file is correct."
};

function writeJsonFile(filePath, data) {
  fs.writeFile(filePath, data, function (err) {
    if (err) return console.log(err);
    console.log(`saved file to ${filePath}`);
  });
}

if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") {
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      writeJsonFile("./public/data/profile.json", data);
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.write(data);
  req.end();
}

if (HASHNODE_BLOG_HOST !== undefined) {
  console.log(`Fetching Hashnode blogs data for ${HASHNODE_BLOG_HOST}`);

  const data = JSON.stringify({
    query: `
      query PublicationPosts($host: String!) {
        publication(host: $host) {
          posts(first: 20) {
            edges {
              node {
                title
                brief
                url
              }
            }
          }
        }
      }
    `,
    variables: {
      host: HASHNODE_BLOG_HOST
    }
  });

  const options = {
    hostname: "gql.hashnode.com",
    path: "/",
    port: 443,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(data)
    }
  };

  const req = https.request(options, res => {
    let hashnodeData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn(`${ERR.requestFailedHashnode} Status: ${res.statusCode}. Keeping existing blog data.`);
      res.resume();
      return;
    }

    res.on("data", d => {
      hashnodeData += d;
    });
    res.on("end", () => {
      const parsedData = JSON.parse(hashnodeData);
      const edges = parsedData?.data?.publication?.posts?.edges || [];
      const items = edges.map(({node}) => ({
        title: node.title,
        description: node.brief,
        url: node.url
      }));

      writeJsonFile("./public/data/blogs.json", JSON.stringify({items}, null, 2));
    });
  });

  req.on("error", error => {
    console.warn(`${ERR.requestFailedHashnode} ${error.message}. Keeping existing blog data.`);
  });

  req.write(data);
  req.end();
}
