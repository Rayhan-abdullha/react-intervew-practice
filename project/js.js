import https from "https";
function transofrmObj(obj) {
  let itemsRemoved = 0;

  function removeNARules(obj) {
    for (const key in obj) {
      if (obj[key] === "N/A" || obj[key] === "-" || obj[key] === "") {
        delete obj[key];
        itemsRemoved++;
      } else if (Array.isArray(obj[key])) {
        obj[key] = obj[key].filter(
          (item) => item !== "N/A" && item !== "-" && item !== ""
        );
      } else if (typeof obj[key] === "object") {
        removeNARules(obj[key]);
      }
    }
  }

  removeNARules(obj);
  obj["items_removed"] = itemsRemoved;
  return obj;
}

https
  .get("https://coderbyte.com/api/challenges/json/json-cleaning", (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      try {
        const jsonObject = JSON.parse(data);
        console.log(jsonObject);
        const cleanedObject = transofrmObj(jsonObject);
        console.log(JSON.stringify(cleanedObject, null, 2));
      } catch (error) {
        console.error("Error parsing JSON:", error.message);
      }
    });
  })
  .on("error", (err) => {
    console.error("Error performing GET request:", err.message);
  });
