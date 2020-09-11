const AWS = require("aws-sdk")

exports.handler = async (event, context) => {
  try {
    console.log(event)
    const info = event.body;

    const htmlBody = `
    <!DOCTYPE html>
    <html lang="EN">
    <body>
    <div>The following person has requested to contact you:</div>
    <hr/>
    <span>Name: <strong>${info.name}</strong></span>
    <br/>
    <span>Email: <strong>${info.email}</strong></span>
    <br/>
    <span>Phone: <strong>${info.phone}</strong></span>
    <br/>
    <hr/>
    <div>
    Sent from Softup Website
    </div>
    </body>
    </html>
  `

    const params = {
      Destination: {
        ToAddresses: ["info@softup.co"]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: htmlBody
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Softup Website Contact"
        }
      },
      Source: "Softup Website <info@softup.co>"
    }

    const sendPromise = new AWS.SES().sendEmail(params).promise()

    const data = await sendPromise

    console.log(data)

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    }
  }
}
