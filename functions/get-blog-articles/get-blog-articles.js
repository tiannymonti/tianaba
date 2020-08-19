const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const response = await fetch('https://dev.to/api/articles?username=tiannymonti');
    const json = await response.json();
    let articles = json.map(element => transformArray(element));
    return {
        statusCode: 200,
        body: JSON.stringify(articles)
    }
  } catch (error) {
    console.log(error);
    return {
        statusCode: 500,
        body: `Error: ${error}`
    }
  }
  
}

function transformArray(element){
    return {
        id: element.id,
        title: element.title,
        description: element.description,
        publish_date: element.readable_publish_date,
        url: element.url,
        image: element.social_image
    }
}