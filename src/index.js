import querystring from "querystring";

const sleep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  })
};

const test = async() => {
  console.log(1);
  console.time('sleep.');
  await sleep();
  console.timeEnd('sleep.');
  console.log(2);
  console.log(querystring.stringify({id: 1}));
};

test();

/**
 * console output
 * 1
 * sleep.: 3006.125ms
 * 2
 * id=1
 */
