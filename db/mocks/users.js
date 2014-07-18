var library = require("../../lib/library");

var users = [
	{
		"_id" : "06b9b91496d9ecb49f15fca00",
		"name" : "bob",
		"email" : "bob@test.com",
		"pass_ha1_name" : "4a8367289d71ca622da4828d4a5314e27",
		"pass_ha1_email" : "27ac363e8decc15eeee2cab6d5d3f4bb8",
		"nickname" : "bob",
		"url" : "",
		"uniqueness_hash" : "79ef4674da6b3d318ceb8da9e80f3cd6f",
		"tokens" : [
			{
				"hash" : "29e5b6c0655ad687a34e7844f8a8cbc69",
				"expires" : "2009-03-27T15:26:15.348Z"
			}
		],
		"permissions" : [
			"confirmed_email"
		]
	},
	{
		"_id" : "06b9b9143a67cb498df41ca00",
		"name" : "alice",
		"email" : "alice@hotmail.com",
		"pass_ha1_name" : "84255c4d0aede5a5e5584f9bb042cff0a",
		"pass_ha1_email" : "24c10165b1dfefadd1e05dcd410cb0a42",
		"firstname" : "alice",
		"lastname" : "Levinson",
		"nickname" : "alice",
		"url" : "",
		"uniqueness_hash" : "c40936f32375de9cfa65cc5446a3afcfa",
		"tokens" : [
			{
				"hash" : "25b63e4f0fd5daddb536227aee571cb27",
				"expires" : "2009-03-27T11:30:02.390Z"
			}
		]
	},
	{
		"_id" : "06b9b9144648cdb498937ca00",
		"name" : "forrest",
		"email" : "forrest@gmail.com",
		"pass_ha1_name" : "a786b0a590a5a4fb5236a77079d0cb36d",
		"pass_ha1_email" : "b9f4da1a9314b5c9ead2d4723eec8bf2e",
		"nickname" : "forrest",
		"url" : "",
		"uniqueness_hash" : "5158169c89c87bae874f9e07236c5ec2f",
		"tokens" : [
			{
				"hash" : "7e2df2a662b58bdde0db8f38f964f0aab",
				"expires" : "2009-03-31T17:56:49.316Z"
			}
		],
		"permissions" : [
			"confirmed_email"
		]
	}
];

function find(name){
	return library.searcher(users, 'name', name);
}

module.exports = {
	users: users,
	find: find
}