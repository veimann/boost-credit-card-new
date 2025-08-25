let cardStatus = "Active"; // default

export async function handler(event, context) {
  if (event.httpMethod === "GET") {
    return { statusCode: 200, body: JSON.stringify({ status: cardStatus }) };
  }
  
  if (event.httpMethod === "POST") {
    const { status } = JSON.parse(event.body);
    if (["Active","Closed"].includes(status)) {
      cardStatus = status;
      return { statusCode: 200, body: JSON.stringify({ status: cardStatus }) };
    } else {
      return { statusCode: 400, body: JSON.stringify({ message:"Invalid status" }) };
    }
  }

  return { statusCode: 405, body: "Method Not Allowed" };
}
