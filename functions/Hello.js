// domain/.netlify/functions/Hello

const items = [
	{ id: 1, name: "john" },
	{ id: 1, name: "john" },
	{ id: 1, name: "john" },
];

exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: "Hello World",
	};
};
