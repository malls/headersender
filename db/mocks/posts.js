var lib = require("../../lib/library");

var posts = [
  // { "_id": "007a6c791399ef48182ea300", "author" : "Henry Blodget", "browser_title" : "", "categories" : [  "Apple" ], "cls" : "entry", "comment_count" : 1, "comment_notify" : false, "comments" : [   {   "author" : "anonymous",   "email" : "alonely@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-13T05:31:10.325Z"),   "text" : "With <a href=\"http://www.trpconverter.com\">trp converter</a>, you shall have rich options to adjust video settings and set audio properties. this excellent conversion tool provides other functions, for example, adjust video effect, crop movie, join Trp files together and trim any segment casually from you TRP videos as you like.",  "ip" : "221.220.222.250",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16",   "isAdmin" : false,  "cid" : ObjectId("5b7a6c791dddf24817194c00") } ], "content" : "<p><img class=\"float_right\" src=\"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg\" border=\"0\" alt=\"stevejobs.jpg\" title=\"stevejobs.jpg\" width=\"188\" height=\"250\" />Despite global market carnage, Apple (AAPL) is holding the $90 level it first breached several days ago.&nbsp; As we noted at the time, at that level, after factoring out $23 a share in cash (and no debt), Apple's business is trading at under 10X trailing free cash flow--an extraordinarily low multiple for a company like this.</p>\r\n<p>Could it go lower? Of course. And if the world markets continue to implode, it probably will.&nbsp; But at this level, there appears to be both valuation and market support.</p>\r\n<p><strong>See Also: </strong><a href=\"http://www.alleyinsider.com/2008/10/apple-aapl-stock-major-buyers-hitting-that-90-bid\">Apple: Major Buyers Stepping In At $90</a></p>", "excerpt" : "", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/apple-stock-holding-key-90-level", "ticker" : [ ], "title" : "Apple Stock Holding Key $90 Level", "ts" : ISODate("2008-10-10T17:59:00Z"), "type" : "story", "vertical" : "sai", "vertical_river" : true, "verticals" : [  "sai" ], "views" : 24 },
  // { "_id": "007a6c791764ef480b01a300", "author" : "John Carney", "browser_title" : "", "categories" : [  "Financial Services" ], "cls" : "entry", "comment_count" : 5, "comment_notify" : false, "comments" : [  {   "author" : "lala",  "email" : "mendie@shaw.ca",   "url" : null,   "ts" : ISODate("2008-10-10T14:38:55.139Z"),   "text" : "Fire him - today.\r\n\r\nHis job performance has been horrific.  He has lost the confidence of his people, the street, and the general public.  \r\n\r\nHis presence negatively affects the integrity of the markets (lets face it, don't need any more negative integrity, markets have that handled all on their own).\r\n\r\nHe need to go TODAY.",  "ip" : "24.71.223.142",   "useragent" : "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; SPOENB/1.0)",  "isAdmin" : false,  "cid" : ObjectId("0bb9b914fe68ef48bea41900") },   {   "author" : "Shortest Seller",   "email" : "shorterslll@gmail.com",  "url" : null,   "ts" : ISODate("2008-10-10T15:31:57.984Z"),   "text" : "Naked shorting could only be done because Cox did nothing about it. Absolutely NOTHING.\r\n\r\nHe enabled counterfeiting of shares by his inactivity. What trust can there be towards SEC when some stocks are on the RegSho list for LONGER THAN A YEAR. One would think SEC could enforce their regulations in that time. But no! They did nothing!\r\n",   "ip" : "82.131.13.205",   "useragent" : "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.27",  "isAdmin" : false,  "cid" : ObjectId("0bb9b9146e75ef4872ac1900") },   {   "author" : "Allen",   "email" : "kaw442@yahoo.com",   "url" : null,   "ts" : ISODate("2008-10-10T16:05:59.647Z"),   "text" : "What's most troubling is that Cox opened the door to financial terrorism by removing the uptick rule and his baffling inaction on naked short selling.  It's like giving anyone that wants to take down our financial system a gatling gun with unlimited ammunition.  Throw in some stun grenades with rumor mongering and CDS manipulation.    Remember that he is directly to blame for mark to market accounting on mortgage derivatives in a market where there is no market, resulting in a destruction in $500 billion of bank capital and $5 trillion in lending capacity.  All of this blood is on his hands.  Cox is an absolute fool.",  "ip" : "76.170.118.157",  "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3",   "isAdmin" : false,  "cid" : ObjectId("007a6c79677def484113a300") },   {   "author" : "JoeBlack",  "email" : "jbdogbits@gmail.com",  "url" : null,   "ts" : ISODate("2008-10-10T17:05:01.232Z"),   "text" : "Guess who was running GS when the SEC removed the net capital rule that allowed excess I-bank leverage? You get one guess, he is on the other side of Helicopter Ben.",   "ip" : "64.201.6.37",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3",   "isAdmin" : false,  "cid" : ObjectId("007a6c793d8bef48371fa300") },   {   "author" : "Ardie",   "email" : "mukaju@aol.com",   "url" : null,   "ts" : ISODate("2008-10-27T13:21:37.259Z"),   "text" : "Cox, to be sure, put new meaning into the terms, \"FUBAR\" and \"clusterf#$k\".  This man has no sense of economic history (look at what short selling did to the economy of Holland in the 1600s) -- and seems to have forgotten the lessons of the Great Depression (e.g., the uptick rule).",  "ip" : "68.155.174.213",  "useragent" : "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; en) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.22",  "isAdmin" : false,  "cid" : ObjectId("32b9b91461c0054989063800") } ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48d95d06796c7a110017443d\" border=\"0\" alt=\"ChrisCoxCravesCDSAuthority.jpg\" title=\"ChrisCoxCravesCDSAuthority.jpg\" width=\"281\" height=\"168\" />We had heard that SEC staffers were openly mocking their boss Chris Cox. Our favorite was a staffer who said Cox was huddled like a mad King Lear with his closest advisers, completely cut off from reality. Today's New York Post <a href=\"http://www.nypost.com/seven/10102008/business/cox_comes_up_short_with_other_members_133023.htm\">indicates</a> that Cox is taking flack from the highest levels of the SEC as well.</p>\r\n<p style=\"padding-left: 30px;\">Sources say Cox's recent pitches to his fellow commissioners - who are responsible for implementing the laws that govern the securities industry - to continue shoring up short-selling protections, have fallen on deaf ears.</p>\r\n<p style=\"padding-left: 30px;\">Specifically, the panel has shrugged off his suggestion that they consider ways to help ease the lifting of the short-selling ban - which was not in effect yesterday - with a sort of speed bump, like the so-called uptick rule.</p>\r\n<p style=\"padding-left: 30px;\">The commissioners are reluctant to jump on any hasty regulations after receiving so much grief over the latest bans, people say.</p>", "excerpt" : "", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/sec-loses-faith-in-chris-cox", "ticker" : [ ], "title" : "SEC Loses Faith In Chris Cox", "ts" : ISODate("2008-10-10T14:12:00Z"), "type" : "story", "vertical" : "clusterstock", "vertical_river" : true, "verticals" : [  "clusterstock" ], "views" : 9 },
  // { "_id": "007a6c792000ef48c7dea300", "author" : "Hilary Lewis", "browser_title" : "Schwarzenegger Tells Paulson California Doesn't Need $7 Billion After All", "categories" : [  "Bailout",  "Bailout",  "Bailout",  "Bailout",  "Hank Paulson", "TV",   "Treasury",   "Entertainment",  "Finance",  "Financial Crisis",   "Financial Crisis",   "Movies",   "Retail",   "Sports",   "U.S. Government" ], "cls" : "entry", "comment_count" : 0, "comment_notify" : false, "comments" : [ ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48ef089e796c7a0000a3e164\" border=\"0\" alt=\"schwarzeneggerap1010.jpg\" title=\"schwarzeneggerap1010.jpg\" width=\"300\" height=\"284\" />A week after he sent <a href=\"http://www.clusterstock.com/2008/10/now-california-needs-an-emergency-bailout\">a letter to Hank Paulson saying he might need a small loan of $7 billion to shore up California's economy</a>, Governor Arnold Schwarzenegger wrote Paulson another note saying the state probably wouldn't need his help after all.</p>\r\n<p>Schwarzenegger claims he's \"cautiously optimistic\" that California will be able to raise the money it needs in the credit markets, after Massachusetts was able to do so earlier this week. (Really, Ahnuld, have you looked at the credit markets lately?)</p>\r\n<p style=\"padding-left: 30px;\"><a href=\"http://www.nytimes.com/2008/10/10/us/10calif.html\">NY Times:</a> &ldquo;Although California feels the enormous effects of our current economic crisis, I am optimistic these efforts to improve liquidity are moving the country toward more stable economic footing,&rdquo; Mr. Schwarzenegger wrote, even as the stock market once again dropped sharply.</p>\r\n<p style=\"padding-left: 30px;\">The letter comes as Mr. Schwarzenegger, a Republican, begins appearing in radio advertisements intended to drum up interest in California bonds. The state plans to return next week to the bond market, which administration officials call their best hope, to seek $4 billion in normally routine short-term loans. It may seek more at a later date.</p>\r\n<p style=\"padding-left: 30px;\">Analysts agreed the bond sales to Massachusetts and a couple of other states were encouraging, and said the governor had good reason for a more optimistic assessment as he entered the market seeking investors. Moreover, a loan from the Treasury would face difficulties. Aside from legal entanglements, assistance from the department could lead a bevy of state and local governments, also suffering financially, to ask for loans, too.</p>\r\n<p>Hmm, \"these efforts to improve liquidity\"...Like <a href=\"http://www.businesssheet.com/2008/10/hollywood-applauds-passage-of-bailout-bill\">the bailout bill that includes a bunch of tax breaks for Hollywood</a>, enabling studios to keep film and TV productions in Southern California?</p>\r\n<p>Indeed, we already noted that <a href=\"http://www.businesssheet.com/2008/10/iron-man-first-in-hollywood-to-benefit-from-hank-paulson-s-big-bailout\">the Hollywood tax breaks would provide a nice boost to the Los Angeles area econom</a>y. But could Governor Schwarzenegger's confidence also have been inspired by the fact that since he sent his first letter to Paulson, the Dodgers made it to the National League Championships? Those baseball games should also increase revenue in and around Dodgertown, which&mdash;fun fact&mdash;<a href=\"http://www.latimes.com/news/local/la-me-dodgertown8-2008oct08,0,461149.story\">could soon be the official name of the area around the LA stadium</a>.</p>\r\n<p><strong>See Also: </strong><a href=\"http://www.businesssheet.com/2008/10/hollywood-applauds-passage-of-bailout-bill\">Iron Man First In Hollywood To Benefit From Hank Paulson's Big Bailout<br />Hollywood Applauds Passage Of Bailout Bill</a><br /><a href=\"http://www.businesssheet.com/2008/10/bailout-to-save-hollywood-\">Bailout To Save&mdash;Hollywood?</a><br /><a href=\"http://www.clusterstock.com/2008/10/now-california-needs-an-emergency-bailout\">Now CALIFORNIA Needs An Emergency Bailout</a></p>", "excerpt" : "Says he's \"cautiously optimistic\" that California will raise the money it needs in the bond market. But is his newfound confidence also the result of developments that could inject some cash into Los Angeles?", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/governator-to-paulson-about-that-7-billion-never-mind", "ticker" : [ ], "title" : "Governator To Paulson: About That $7 Billion, Never Mind", "ts" : ISODate("2008-10-10T07:01:00Z"), "type" : "story", "vertical" : "sportspage", "vertical_river" : true, "verticals" : [  "thewire",  "sportspage" ], "views" : 6 },
  // { "_id": "007a6c7927adef48ba3fa300", "author" : "Hilary Lewis", "browser_title" : "Britney, Inc. Launching Comeback", "categories" : [   "Britney Spears",   "Circus",   "Jive",   "Sony",   "Sony",   "Womanizer",  "Britney Spears",   "Comeback",   "Entertainment",  "Music",  "Naked",  "Britney Spears" ], "cls" : "entry", "comment_count" : 1, "comment_notify" : false, "comments" : [  {   "author" : "Jesse Woods",   "email" : "ClusterTim@yahoo.com",   "url" : null,   "ts" : ISODate("2008-10-10T21:30:25.634Z"),   "text" : "Give her a couple weeks, Im sure the \"old self\" will come shining through. People dont change!\r\n\r\nwww.privacy.de.tc",   "ip" : "69.69.28.85",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17",   "isAdmin" : false,  "cid" : ObjectId("007a6c7971c9ef480f57a300") } ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48efb854796c7a0000a348c0\" border=\"0\" alt=\"britneyandmanagerap.jpg\" title=\"britneyandmanagerap.jpg\" width=\"300\" height=\"208\" /><strong></strong></p>\r\n<p><strong>UPDATE:</strong> \"Womanizer\" is a hit. The song jumped a record-breaking 95 spots this week to top Billboard's Hot 100 singles list. This is Britney's first number one single since 1999's \"Baby One More Time,\" which we find shocking. Nonetheless, she owes much of \"Womanizer's\" swagger up the charts to the track's also record-shattering digital downloads.</p>\r\n<p style=\"padding-left: 30px;\"><a href=\"http://www.billboard.com/bbcom/news/article_display.jsp?vnu_content_id=1003874105\">Billboard:</a> Spears' single is spurred by first-week download sales of 286,000, the biggest opening-week tally by a female artist since Nielsen SoundScan began tracking digital downloads in 2003, besting Mariah Carey's take for \"Touch My Body\" by just over 200 units.</p>\r\n<p><strong>UPDATE:</strong> <a href=\"http://www.billboard.biz/bbbiz/content_display/industry/e3ie0a4ec066acfa66378f7fd734cfa4a2f\">Britney's reportedly launching a world tour this spring.</a></p>\r\n<p><strong>UPDATE: </strong>Britney did premiere her \"Womanizer\" video on 20/20, but some of the clip's scenes, like the ones in which she's <em>naked</em>, were too hot for ABC. Ah, that's the problem with debuting a music video on network TV.</p>\r\n<p>So it's no surprise that the \"director's cut\" version, featuring Britney in the buff, has become an Internet sensation. MTV, which has been promoting the clip on its homepage, has already received more than 800,000 views of the <a href=\"http://www.mtv.com/overdrive/?artist=501686&amp;vid=288244\">video</a>, while various versions on YouTube have received as many as 45,000 plays.</p>\r\n<p>You could say this was a flaw in Britney's plan, but she's no fool. She knew 20/20 wouldn't be able to show as much as MTV, which means Britney found a way to get people who saw the clip on 20/20 to check it out online and keep MTV in the music-video game. Oh, Britney, don't try to front, we know just what you are.</p>\r\n<p><strong>EARLIER:</strong> We knew that Britney Spears was back last month when she stormed the VMAs looking like her old (read: good) self, but that was just the first step in the relaunch of Britney the brand. In doing this, Britney's made a number of calculated moves that illustrate the same sort of media control she used to have before she lost control&mdash;and her hair&mdash;and let the media control her.</p>\r\n<p>Britney's new single \"Womanizer\" hit radio two weeks ago and shot to the top of iTunes most downloaded songs list after it became available on Tuesday.</p>\r\n<p>The video <a href=\"http://abcnews.go.com/2020/CelebrityCafe/wireStory?id=5951582\">premieres on <em>20/20</em> tonight</a> in a bizarrely anachronistic move that's also somewhat unsurprising since Britney's career is so connected to her personal life.</p>\r\n<p>Meanwhile, Britney's re-emergence will also include a documentary, <em>For the Record</em>, which has been shooting for the past month or so. In it, Britney will presumably explain what she was thinking during her tabloid exploits of the past few years. It's an effort to reclaim control of her brand that's classic Britney Spears.</p>\r\n<p style=\"padding-left: 30px;\">\"So much has gone on over the last couple of years and there's a lot that people don't know about me that I want them to know.\" said Britney [<a href=\"http://biz.yahoo.com/prnews/081010/nyf024.html?.v=101\">in the press release announcing <em>For the Record</em></a>]  \"I wanted to make this film because I started to feel like I wasn't being seen in the light that I wanted to be seen in.  This is an opportunity to set the record straight and talk about what I've been through and where I'm headed.\"</p>\r\n<p>Manipulating the media one more time. That's our Britney Spears!</p>\r\n<p>Britney's 90-minute special will air on Sunday, November 30 further cementing the music industry's takeover of the Thanksgiving holiday. (Trailer embedded below.)</p>\r\n<p>&nbsp;</p>\r\n<div style=\"margin:0; background-color:#212121; width:423px;\"><embed type=\"application/x-shockwave-flash\" width=\"423\" height=\"318\" src=\"http://www.mtv.com/player/embed/\" flashvars=\"CONFIG_URL=http://www.mtv.com/player/embed/configuration.jhtml%3Fvid%3D287976&amp;allowFullScreen=true\" allowfullscreen=\"true\" base=\".\" allowscriptaccess=\"always\"></embed>\r\n<div style=\"background-color:#212121; margin:0 0 0 0; padding:0 0 2px 0; width:423px; text-align:center; overflow:auto; min-width:423px;\">\r\n<ul style=\"margin:0; padding:0; list-style:none line-height: 1.2em;\">\r\n<li style=\"margin-right:4px; display:inline;\"><a href=\"http://www.mtv.com/news/\" target=\"_blank\">Celebrity News</a></li>\r\n</ul>\r\n</div>\r\n</div>", "excerpt" : "<p>Manipulating the media one more time...</p>\r\n<ul>\r\n<li><a href=\"http://www.billboard.biz/bbbiz/content_display/industry/e3ie0a4ec066acfa66378f7fd734cfa4a2f\">World Tour Kicks Off Spring 2009</a></li>\r\n<li><a href=\"http://www.mtv.com/overdrive/?artist=501686&amp;vid=288244\">\"Womanizer\" Video</a><a href=\"http://abcnews.go.com/2020/CelebrityCafe/wireStory?id=5951582\"><br /></a></li>\r\n<li><a href=\"http://www.mtv.com/overdrive/?vid=287976\">Watch The Trailer For Britney: The Documentary</a><br /></li>\r\n<li><a href=\"http://www.businesssheet.com/2008/9/britney-spears-planning-world-tour-for-2009-feels-empowered-by-vma-win\">Earlier: Britney Makes Surprise Radio Appearance</a> <br /></li>\r\n</ul>", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/britney-inc-back-in-business", "ticker" : [ ], "title" : "Britney, Inc. Back In Business With Her Best-Performing Single In Years", "ts" : ISODate("2008-10-15T22:24:00Z"), "type" : "story", "vertical" : "thewire", "vertical_river" : true, "verticals" : [  "thewire" ], "views" : 81 },
  // { "_id": "007a6c792854ef4802f6a300", "author" : "Henry Blodget", "browser_title" : "", "categories" : [ ], "cls" : "entry", "comment_count" : 6, "comment_notify" : false, "comment_thread_count" : 6, "comments" : [  {   "author" : "Jim Cramer Jr",   "email" : "me@aol.com",   "url" : null,   "ts" : ISODate("2008-10-10T13:38:17.455Z"),   "text" : "Who gives a shit  about this washed up hasbeen. What has he done in the last 20 years.\r\n\r\nHe bought stocks 50 years ago and held them forever. used his money to buy established businesses. Who else couldn't have made money doing that.\r\n\r\nFile this under the who gives a shit category too.",  "ip" : "209.130.203.190",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.30 Safari/525.13",   "isAdmin" : false,  "cid" : ObjectId("0bb9b914c85aef482c9c1900") },   {   "author" : "Justin Fisher",   "email" : "nom0ny@yahoo.com",   "url" : null,   "ts" : ISODate("2008-10-10T13:44:21.715Z"),   "text" : "The choice of timing seemed to be more Goldman's and GE's, than his. Regardless, I think it is more a bet that both will survive. (1) He was just taking advantage of the \"Buy $3 Billion in Preferred, Get $3 Billion in Options Free\" sale going on and (2) he has five-year terms, which even Roubini seems to think will be enough time for a recovery. The put options he sold last year on the major indices were even longer, 15–20 years terms I believe.\r\n\r\nBut I agree, things aren't looking so hot on paper—for him or anyone else.",   "ip" : "72.11.12.90",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.17) Gecko/20080829 Firefox/2.0.0.17",   "isAdmin" : false,  "cid" : ObjectId("007a6c79355cef4866faa300") },   {   "author" : "MadDog",  "email" : "larryjgallo@gmail.com",  "url" : null,   "ts" : ISODate("2008-10-10T14:22:17.073Z"),   "text" : "If Buffett wants to have a civilized country left to spend his hard earned money in, he better be buying those GS and GE common shares himself hand over fist, with the strength of a small nation's economy as i type this...some stocks like Apple have clearly bottomed already, sink a few billion in there Warren and show yer muscle you old %$#@@$% fart!!!!\r\n",   "ip" : "24.187.225.2",  "useragent" : "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; InfoPath.2)",  "isAdmin" : false,  "cid" : ObjectId("007a6c791865ef48f601a300") },   {   "author" : "She Mate Me",   "email" : "jb32297@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-10T14:33:25.731Z"),   "text" : "\"Who else couldn't have made money doing that.\"\r\n\r\nApparently every other person alive at the time with the same opportunities in front of them.  What a sage comment.",  "ip" : "24.117.78.203",   "useragent" : "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 2.0.50727; .NET CLR 1.1.4322; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648)",   "isAdmin" : false,  "cid" : ObjectId("0bb9b914b567ef4806a41900") },   {   "author" : "big up",  "email" : "iqy3834@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-10T15:03:50.557Z"),   "text" : "hello.  I've been reading this blog for a couple weeks, and i thoroughly enjoy it, save for one glaring problem.  Jim Cramer Jr who incessantly makes asinine comments. Can you please ban him?",   "ip" : "71.172.237.157",  "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3",   "isAdmin" : false,  "cid" : ObjectId("007a6c79d66eef488a09a300") },   {   "author" : "moneymoney",  "email" : "lucy.carney@gmail.com",  "url" : null,   "ts" : ISODate("2008-10-10T15:34:13.630Z"),   "text" : "I agree with big up.  I haven't seen anything but criticism from JC Jr.  Maybe he, or she, just likes to complain. Perhaps JC Jr. is unfamiliar with \"constructive criticism\", or maybe, in his words, simply doesn't give a shit - but, ironically, does give enough of one to read and comment.  So, others of us can simply ignore the comments, which make him sound not only asinine, but also ignorant.  ",   "ip" : "69.124.101.87",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3",   "isAdmin" : false,  "cid" : ObjectId("0bb9b914f575ef48b5ac1900") } ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48e3e4e2796c7a210007ee80\" border=\"0\" alt=\"warrenbuffett8.jpg\" title=\"warrenbuffett8.jpg\" width=\"320\" height=\"240\" />When Warren Buffett bailed out GE and Goldman Sachs a few weeks ago, many commentators thought he had once again called the bottom. A handful, however, noted that Warren had not done what he often does near a bottom: buy common stock. Instead, Warren bought perpetual preferred stock with a 10% coupon.</p>\r\n<p>While common-stock investors continue to get clobbered, moreover, Warren will be collecting his preferred dividend. And if the companies were to be liquidated, Warren would get his share before the common shareholders got a penny.</p>\r\n<p>That said, the market price for Warren's preferred stock in both Goldman and GE is probably well below what he paid for it. His options in both companies to buy common stock, moreover, are now way out of the money.</p>\r\n<p>Warren bought into Goldman when the stock was at $125 and GE at $22.50. At this writing, Goldman is trading at $81 and GE at $18.</p>\r\n<p><strong>See Also:</strong><br /><a href=\"http://www.clusterstock.com/2008/10/warren-buffett-why-i-bought-ge-why-we-have-terrible-terrible-problems-\">Warren Buffett: We Have \"Terrible, Terrible, Terrible Problems\"</a></p>", "excerpt" : "Warren's not getting clobbered in Goldman and GE as badly as common stockholders are, but he's still taking it on the chin.&nbsp; And his options are now way out of the money.", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/warren-buffett-bludgeoned-but-now-we-know-why-he-bought-preferred-stock-", "ticker" : [  "GE",  "GS" ], "title" : "Warren Buffett Bludgeoned (But Now We Know Why He Bought Preferred Stock)", "ts" : ISODate("2008-10-10T12:59:00Z"), "type" : "story", "vertical" : "clusterstock", "vertical_river" : true, "verticals" : [  "clusterstock" ], "views" : 119 },
  // { "_id": "007a6c792a63ef48faffa300", "author" : "Joe Weisenthal", "browser_title" : "", "categories" : [ ], "cls" : "entry", "comment_count" : 1, "comment_notify" : false, "comments" : [   {   "author" : "dMan",  "email" : "demian33@hotmail.com",   "url" : null,   "ts" : ISODate("2008-10-10T16:20:10Z"),   "text" : "Thanks, I needed that '- )",  "ip" : "199.172.169.7",   "useragent" : "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)",   "isAdmin" : false,  "cid" : ObjectId("0bb9b914ba80ef4849b41900") } ], "content" : "<p><img src=\"/~~/f?id=48ef6303796c7a0000a3ffb4\" border=\"0\" alt=\"NYPoststocks.png\" title=\"NYPoststocks.png\" width=\"266\" height=\"288\" /></p>", "excerpt" : "", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/new-york-post-finds-bull-market-", "ticker" : [ ], "title" : "New York Post Finds Bull Market!", "ts" : ISODate("2008-10-10T14:12:00Z"), "type" : "story", "vertical" : "clusterstock", "vertical_river" : true, "verticals" : [  "clusterstock" ], "views" : 1 },
  // { "_id": "007a6c792bdcef48c663a300", "author" : "Peter Kafka", "browser_title" : "", "categories" : [  "Advertising",  "Apple",  "Google",  "iPhone",  "Mobile" ], "cls" : "entry", "comment_count" : 3, "comment_notify" : false, "comments" : [  {   "author" : "anonymous",   "email" : "alonely@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-13T03:53:27.806Z"),   "text" : "With <a href=\"http://www.trpconverter.com\">trp converter</a>, you shall have rich options to adjust video settings and set audio properties. this excellent conversion tool provides other functions, for example, adjust video effect, crop movie, join Trp files together and trim any segment casually from you TRP videos as you like.",  "ip" : "221.220.222.250",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16",   "isAdmin" : false,  "cid" : ObjectId("5b7a6c7938c6f24815154c00") },   {   "cid" : ObjectId("4b00aa7a0000000000bb0c0c"),   "author" : "mega",  "email" : "help@mwaahb.com",  "url" : "http://www.as7ap4ever.com",  "user_id" : null,   "ts" : ISODate("2009-11-16T01:27:22.165Z"),   "text" : "Thank you very much for this article from the most wonderful <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8074\">اعراض الحمل</a>  <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8690\">سعد الحارثي</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8689\">ياسر القحطاني</a> <a href=\"http://vb.as7ap4ever.com/forumdisplay.php?f=44\">تسريحات</a> I hope always follow such rave articles because it help me to knowledge and technological development for me and my country and observers always be the first of all what she presents, that every person is looking for the rest of his life and the knowledge that develops has the knowledge and culture, whether by reading or a scientific experiment <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8891\">انفلونزا الخنازير في</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8996\">تواقيع جاهزة</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8781\">رواية ورود في مزبله الواقع</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8869\">سبق</a>",   "ip" : "41.232.254.74" },   {   "cid" : ObjectId("4b00aaab0000000000c4c179"),   "author" : "mega",  "email" : "help@mwaahb.com",  "url" : "http://www.as7ap4ever.com",  "user_id" : null,   "ts" : ISODate("2009-11-16T01:28:11.297Z"),   "text" : "Thank you very much for this article from the most wonderful <a href=\"http://vb.as7ap4ever.com/showthread.php?t=7979\">بص وطل</a>  <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8711\">رسائل حب</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=7993\">موقع مصراوي للنتائج</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8025\">فيفا 2010 كاملة</a> I hope always follow such rave articles because it help me to knowledge and technological development for me and my country and observers always be the first of all what she presents, that every person is looking for the rest of his life and the knowledge that develops has the knowledge and culture, whether by reading or a scientific experiment <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8029\">اختبارات تحليل الشخصية</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8254\">نكت جنسية</a> <a href=\"http://vb.as7ap4ever.com/showthread.php?t=8033\">جريدة الجمهورية</a>",  "ip" : "41.232.254.74" } ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48333002796c7aeb001224be\" border=\"0\" alt=\"iphone-your-ad-here.jpg\" title=\"iphone-your-ad-here.jpg\" width=\"224\" height=\"170\" />Sure, Google (GOOG) is spending lots of time and money to launch <a href=\"http://www.alleyinsider.com/2008/9/bottom-line-apple-s-iphone-still-beats-google-s-g1-android-gphone\">Android</a>, a mobile OS that will compete squarely with the iPhone. But it's still happy to take advantage of the iPhone's installed based of 10 million-plus, via what amounts to an iPhone-specific ad network. <a href=\"http://www.adweek.com/aw/content_display/news/digital/e3i25cba8ba761bcf122aa3e48037a01e09\">AdWeek</a>:</p>\r\n<p style=\"padding-left: 30px;\">In meetings with agencies, Google has presented a new option to show different ads in response to searches made from iPhones. The change, expected to be implemented shortly, means advertisers will be able to create an iPhone ad group as part of their regular search campaign, according to agency executives briefed about the modification.<br /> &nbsp;<br /> Google representatives would not confirm the new option, although one said it had been under consideration.<br /> &nbsp;<br /> The move highlights Apple's growing clout in the mobile ad market, as well as the challenges raised by iPhone for marketers.<br /> &nbsp;<br /> Unlike phones that browse the mobile Web, the iPhone pulls up sites directly from the Internet. This means the ads users see, unless a publisher creates an iPhone-specific site, are the same as those viewed from a computer. The new option would in essence build a bridge between repurposing Internet ads for a mobile experience and creating a parallel structure for it.</p>\r\n<p>Google isn't the first company to figure out that the iPhone, and other phones that offer up the \"real\" Web, will require specialized advertising. JumpTap and AdMob have been furiously trying to carve out space in the field, all the while looking over their shoulder and waiting for Google to show up. Time's up.</p>\r\n<p><strong>See Also:</strong> <a href=\"http://www.alleyinsider.com/2008/8/jumptap-raises-26-million-series-d-for-mobile-web-ads-portals\">JumpTap Raises $26 Million</a><br /><a href=\"http://www.alleyinsider.com/2008/7/the-iphone-s-next-victim-fledgling-mobile-ad-networks-aapl-\">The iPhone's Next Victim: Fledgling Mobile Ad Networks</a></p>", "excerpt" : "Sure , Android could be a big ad business for Google one day. Until then, the iPhone will do just fine.", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/google-s-newest-market-the-iphone-", "ticker" : [ ], "title" : "Google's Newest Market: The iPhone ", "ts" : ISODate("2008-10-10T23:14:00Z"), "type" : "story", "vertical" : "sai", "vertical_river" : true, "verticals" : [  "sai" ], "views" : 75 },
  // { "_id": "007a6c793035ef4895e9a300", "author" : "Henry Blodget", "browser_title" : "", "categories" : [  "Economy" ], "cls" : "entry", "comment_count" : 8, "comment_notify" : false, "comments" : [   {   "author" : "Matt",  "email" : "matthendry@gmail.com",   "url" : null,   "ts" : ISODate("2008-10-10T11:55:37.925Z"),   "text" : "In other News Home Brew Stores and Brew On Premise establishments  are seeing an uptick in sales because of the financial crisis .\r\n\r\nhttp://www.news.com.au/business/money/story/0,25479,24446556-5017313,00.html\r\n",  "ip" : "76.24.232.210",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.30 Safari/525.13",   "isAdmin" : false,  "cid" : ObjectId("007a6c79b942ef48b5eea300") },   {   "author" : "adrian",  "email" : "marti.adrian@gmail.com",   "url" : null,   "ts" : ISODate("2008-10-10T13:18:38.732Z"),   "text" : "do you people ever listen to yourselves? You have been saying the government must act to save the system since fannie/freddie started dying. At each step you though it would be the last. \r\n\r\nAnd now we are talking about a new New Deal. Have you people lost your frickin minds? Do we learn nothing from history? The new deal was a disaster that took a sharp recession and turned it into a depression. A massive growth of government that we still have with us today.   When will so called capitalists trust the market and demand government to get out of the way? \r\n\r\n",   "ip" : "67.8.19.109",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.30 Safari/525.13",   "isAdmin" : false,  "cid" : ObjectId("0bb9b9142e56ef48ec991900") },   {   "author" : "Tim A.",  "email" : "tim.adams@hotmail.com",  "url" : null,   "ts" : ISODate("2008-10-10T13:44:09.714Z"),   "text" : "Are you trying to bankrupt the US treasury? Now that will be a real problem...",  "ip" : "76.186.176.42",   "useragent" : "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; FDM; .NET CLR 2.0.50727)",  "isAdmin" : false,  "cid" : ObjectId("007a6c79295cef485ffaa300") },   {   "author" : "Steve",   "email" : "stevejunk@gmail.com",  "url" : null,   "ts" : ISODate("2008-10-10T14:15:25.444Z"),   "text" : "<i>The new deal was a disaster that took a sharp recession and turned it into a depression. </i>\r\n\r\nEase up hoss.  Check the pedantic Kudlow talking points at the door.  \r\n\r\nI know how much you must hate FDIC, interstate highways, and the electric grid, but let's try to focus on smart spending rather than philosophy.  I think we're passed that at this point.\r\n\r\n",  "ip" : "64.61.68.20",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3",   "isAdmin" : false,  "cid" : ObjectId("0bb9b9147d63ef483ba11900") },   {   "author" : "Phil",  "email" : "phil_kaye@symantec.com",   "url" : null,   "ts" : ISODate("2008-10-10T14:34:11.003Z"),   "text" : "I'm with Steve @ 1015, above.\r\n\r\nNext thing you know, I won't be able to swap all this paper for a car. Perhaps they'll take one of these llamas I've got in the backyard instead.\r\n\r\nAlso, \"adrian\", where are you getting all this counterfactual information from? Planet Philip K. Dick (an author not an insult)? You know that the 1930's economy would've been sound if it hadn't been for what? Hoover? FDR? WW2? Fractional reserve lending?",   "ip" : "82.44.210.217",   "useragent" : "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_5; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1",  "isAdmin" : false,  "cid" : ObjectId("007a6c79e267ef483404a300") },   {   "author" : "hehateme",  "email" : "lonelydude123@gmail.com",  "url" : null,   "ts" : ISODate("2008-10-10T15:30:14.606Z"),   "text" : "If it wasnt for the NEW DEAL America would have become a communist country. Unlike today. Captains of Industry where hated by most americans. What the Reds said a lot of people liked! Why should rockerfeller live like a king and i live on next to nothing?",   "ip" : "12.38.132.137",   "useragent" : "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1",  "isAdmin" : false,  "cid" : ObjectId("007a6c790775ef488f0da300") },   {   "author" : "LAN",   "email" : "LAN32423@GMAIL.COM",   "url" : null,   "ts" : ISODate("2008-10-10T17:54:53.837Z"),   "text" : "CLOSE DOWN THE MARKET (TEMPORARY BASIS). LET IT BREATHE. COOL AND CALM.",   "ip" : "68.174.190.227",  "useragent" : "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",   "isAdmin" : false,  "cid" : ObjectId("007a6c79ed96ef48002ca300") },   {   "author" : "anonymous",   "email" : "alonely@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-13T06:07:43.534Z"),   "text" : "With <a href=\"http://www.trpconverter.com\">trp converter</a>, you shall have rich options to adjust video settings and set audio properties. this excellent conversion tool provides other functions, for example, adjust video effect, crop movie, join Trp files together and trim any segment casually from you TRP videos as you like.",  "ip" : "221.220.194.134",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16",   "isAdmin" : false,  "cid" : ObjectId("07b9b914afe5f248b5f13f00") } ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48ef3730796c7a0000a3ea1d\" border=\"0\" alt=\"sadgalontradingfloor.jpg\" title=\"sadgalontradingfloor.jpg\" width=\"400\" height=\"270\" />The NIKKEI closed down 10%, and the FTSE is down 8%. The US and UK governments are working on a massive new bailout plan that might include:</p>\r\n<ul>\r\n<li>Temporary <a href=\"http://online.wsj.com/article/SB122360336021121827.html?mod=testMod\">guarantee of all bank deposits</a></li>\r\n<li>Guarantee of all interbank lending</li>\r\n<li><a href=\"http://www.nytimes.com/2008/10/10/business/worldbusiness/10global.html?_r=1&amp;ref=business&amp;oref=slogin\">Capital injections into banks</a>.</li>\r\n</ul>\r\n<p>These are some of the critical recommendations put forth by many economists, including <a href=\"http://www.clusterstock.com/2008/10/a-few-weeks-away-from-global-economic-catastrophe\">Nouriel Roubini </a>and <a href=\"http://www.clusterstock.com/2008/10/krugman-on-the-crash\">Paul Krugman</a>. (Another is major new fiscal spending--a new New Deal).</p>\r\n<p>The first move, guaranteeing bank deposits, will calm frantic runs on banks. The second, guaranteeing interbank lending, will enable banks to risklessly lend to each other again (this has all but stopped). The third, injecting capital, will tackle the heart of the banking problem, which is that most banks are now grossly undercapitalized (the IMF estimates that western banks need $675 billion of new equity).</p>\r\n<p>These are huge, positive steps that might begin to ease the credit markets. In Nouriel Roubini's opinion, however, they will help <a href=\"http://www.clusterstock.com/2008/10/a-few-weeks-away-from-global-economic-catastrophe\">reduce the chances of a global economic catastrophe</a>. They may also put western governments and taxpayers in serious financial trouble. They are not likely to head off a severe, prolonged recession.&nbsp;&nbsp;</p>\r\n<p>In other news, our leader will speak to us this morning and tell us to remain calm.</p>\r\n<p><strong>See Also: </strong><br /><a href=\"http://www.clusterstock.com/2008/10/live-on-the-crash-clusterstock-expert-panel\">LIVE AT THE CRASH: Expert Panel</a><br /><a href=\"http://www.clusterstock.com/2008/10/krugman-on-the-crash\">Krugman on the Crash</a><br /><a href=\"http://www.clusterstock.com/2008/10/a-few-weeks-away-from-global-economic-catastrophe\">A Few Weeks From Global Economic Catastrophe</a></p>", "excerpt" : "Huge new bailout plans may guarantee all bank deposits and interbank lending, recapitalize banks, and, possibly, head off global economic catastrophe. They may also put western governments in serious financial trouble.", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/world-markets-smashed-massive-new-bailout-talks", "ticker" : [ ], "title" : "World Markets Smashed, Massive New Bailout Talks", "ts" : ISODate("2008-10-10T10:44:00Z"), "type" : "story", "vertical" : "clusterstock", "vertical_river" : true, "verticals" : [  "clusterstock",  "sai",  "moneygame" ], "views" : 16 },
  // { "_id": "007a6c793762ee48a48aa300", "author" : "Peter Kafka", "browser_title" : "", "categories" : [  "Funding",  "Startups" ], "cls" : "entry", "comment_count" : 8, "comment_notify" : false, "comment_thread_count" : 8, "comments" : [  {   "author" : "JoeInsider",  "email" : "joe@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-09T22:20:54.459Z"),   "text" : "Here are notes from the meeting:\r\n\r\nToday, Sequoia Capital hosted a mandatory CEO All-Hands Meeting on Sand Hill Road (where else?).  There were about 100 CEO's in attendance and let me tell you, the mood was somber.  I'm not one to perpetuate doom and gloom or bad news, but let me underscore this for you:  We are in a serious economic downturn and this is just the beginning.  Immediate, decisive and swift action is required, along with frugal, day-to-day management of expenses and our business is required.\r\n\r\n \r\n\r\n***Here are my notes from the meeting.  Keep this note in your in-box and read it every day.  I'm serious folks, this is for our survival.***\r\n\r\n \r\n\r\nSpeakers: \r\n\r\n \r\n\r\n·         Mike Moritz, General Partner, Sequoia Capital (he moderated the speakers).\r\n\r\n·         Eric Upin, Partner, Sequoia Capital (Eric ran the $26-Billion Stanford Endowment Fund and knows a few things about Economics and investing.)\r\n\r\n·         Michael Beckwith, Sequoia Capital (Michael was recruited to start Sequoia's very first hedge fund, coming from Maverick Capital and Robertson Stephens.  I know him from my BEA days.)\r\n\r\n·         Doug Leone, , General Partner, Sequoia Capital \r\n\r\n \r\n\r\n \r\n\r\nSlide projected on the huge conference room screen as people assembled inside the conference center to take their seats:  a gravestone with the inscription:  RIP, Good Times.\r\n\r\n \r\n\r\nMike Moritz:\r\n\r\n \r\n\r\n·         The only time Sequoia's assembled all CEO's like this was during the dot.com crash.\r\n\r\n·         We are in drastic times.  Drastic times mean drastic measures must be taken to survive.  Forget about getting ahead, we're talking survive.  Get this point into your heads.\r\n\r\n·         For those of you that are not cash-flow positive, get there now.  Raising capital is nearly impossible if you're too far off of cash flow positive. \r\n\r\n·         There will be consequences for those who hesitate.  Act now.\r\n\r\n \r\n\r\nEric Upin:\r\n\r\n \r\n\r\n·         It's always darkest before it's pitch black. \r\n\r\n·         Survival of this storm means drastic measures must be taken now, so you will have the opportunity to capitalize on this down turn in the future. \r\n\r\n·         We are in the beginning of a long cycle, what we call a \"Secular Bear Market.\"  This could be a 15 year problem.  [many slides on historical charts of previous recessions, averaging 17 year cycles.]\r\n\r\n·         The credit market [versus the Equity markets] are the issue and will take time to recover.\r\n\r\n·         Inflection point:  Make changes, slash expenses, cut deep and keep marching.  You can't be a general if you turn back.\r\n\r\n·         This is a global issue and not a 'normal' time.\r\n\r\n·         There is significant risk to growth and your personal wealth.\r\n\r\n·         Advice:\r\n\r\no   Manage what you can control.  You can't control the economy, but you can control everything else.\r\n\r\n§  Cut spending.  Cut fat.  Preserve Capital.\r\n\r\n§  Don't trust your models and spreadsheets.  All assumptions prior to today are wrong.\r\n\r\n§  Focus on quality.\r\n\r\n§  Reduce risk.\r\n\r\n \r\n\r\nMichael Beckwith:\r\n\r\n \r\n\r\n·         Note:  Michael had a lot of slides that were charts, data points and comparisons.\r\n\r\n·         A \"V\" shaped recovery is unlikely [√]\r\n\r\n·         Cuts in spending will accelerate in Q4/Q1.  Look at eBay—this is just the beginning.\r\n\r\n \r\n\r\nDoug Leone:\r\n\r\n \r\n\r\n·         This is a different animal and will take years to recover.\r\n\r\n·         Getting another round if you're not profitable will be rough.\r\n\r\n·         Do everything possible to get to cash flow positive.  Now.\r\n\r\n·         Nail your Sales and Marketing message.\r\n\r\n·         Pound your competitors shortcomings.  They're hurting and they will be quiet.  Take the offensive.\r\n\r\n·          In a downturn, aggressive PR and Communications strategy is key.\r\n\r\n·         M&A will decrease dramatically and only lean companies, with proven sales models will be acquired.\r\n\r\n·         Spectrum discussion:\r\n\r\no   Capital Preservation ß----------------------------------à Grab Market\r\n\r\no   Everyone should be far to the left (capital preservation)\r\n\r\n \r\n\r\n·         Requirements of our companies:\r\n\r\no   You must have a proven product\r\n\r\no   You must cut expenses.  Now and deep.\r\n\r\no   Your product should reduce expenses and drive revenue \r\n\r\no   Honestly assess your solution vs. your competitors.\r\n\r\no   Cash is king [have you gotten this message yet?]\r\n\r\no   You must get to profitability as soon as possible to weather this storm and be self-sustaining.\r\n\r\n \r\n\r\n·         Operations review:\r\n\r\no   Engineering:  Since you already have a product, strongly consider reducing the number of engineers that you have.\r\n\r\no   Product:  What features are absolutely essential?  Choose carefully and focus.\r\n\r\no   Marketing:  Measure everything and cut what is not working.  You don't need large Product Marketing, Product Management teams.\r\n\r\no   Sales & Business Development:  What is your return on this investment?  The Valley has gotten fat with Sales people:  Big bases, big variables.  Cut base salaries on sales people, highly leverage them with upside (increase variable) and make people pay for themselves via increased sales productivity.  Don't add sales people until you've achieved your goals with sales productivity.  Be disciplined.\r\n\r\no   Pipeline:  Scrub the shit out of it and be honest with yourself.\r\n\r\no   Finance:  Defer payments, what is essential?  Kill cash burn.\r\n\r\n \r\n\r\n·         Death Spiral (Nobody moves fast enough in times like these, so get going and research later.)\r\n\r\no   The death spiral sucks you in, you're in it before you know it and then you die.\r\n\r\no   Survival of the quickest.\r\n\r\no   Cutting deeper is the formula for survival.\r\n\r\no   You should have at least one year's worth of cash on hand.\r\n\r\no   Tactics:\r\n\r\n§  Assess your situation.  Drop your assumptions, start with a blank page and start zero-based budgeting.\r\n\r\n§  Adapt quickly\r\n\r\n§  Make your cuts\r\n\r\n§  Review all salaries\r\n\r\n§  Change sales comp\r\n\r\n§  Bolster your balance sheet—if you can add $5M to your coffers, take it and save it.\r\n\r\n§  Spend like it's your last dollar.\r\n\r\n \r\n\r\n·         Get Real or Go Home.",   "ip" : "209.125.156.194",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3",   "isAdmin" : false,  "cid" : ObjectId("2bb9b914c683ee4860eb6400") },   {   "author" : "Peter Kafka",   "email" : "pkafka@alleyinsider.com",  "url" : "http://www.alleyinsider.com/peter_kafka",  "user_id" : ObjectId("f237544bce97a3477bb58500"),   "ts" : ISODate("2008-10-09T22:33:47.832Z"),   "text" : "Awesome, Joe. Thanks much.",  "ip" : "64.70.120.87",  "useragent" : "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.3) Gecko/2008092414 Firefox/3.0.3",  "isAdmin" : true,   "cid" : ObjectId("007a6c79cb86ee48f0aca300") },   {   "author" : "clickbot",  "email" : "dontspam@gmail.com",   "url" : null,   "ts" : ISODate("2008-10-10T00:55:26.422Z"),   "text" : "Anybody know if there are redemption pressures at Sequoia?  I realize much depends on the fund and investors, etc. ",   "ip" : "69.3.90.69",  "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3",   "isAdmin" : false,  "cid" : ObjectId("007a6c79fea7ee4879bea300") },   {   "author" : "TV1Turtle",   "email" : "bh@tv1.com",   "url" : "http://www.tv1.com",   "ts" : ISODate("2008-10-10T15:10:39.445Z"),   "text" : "Wow, depression, finally the world has ran out of place for resources?\r\n\r\nThanks for the reflection.\r\n\r\nTV1Turtle",   "ip" : "67.110.159.195",  "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1",   "isAdmin" : false,  "cid" : ObjectId("0bb9b9146f70ef48f0a81900") },   {   "author" : "John Furrier",  "email" : "johnfurrier@gmail.com",  "url" : "http://furrier.org",   "ts" : ISODate("2008-10-10T15:51:11.475Z"),   "text" : "New reality is setting in.. There is a new movie playing in Silicon Valley - Scared Straight\r\n\r\nhere is scene 1 - startup board meeting\r\n\r\nhttp://furrier.org/2008/10/10/new-movie-in-silicon-valley-now-playing-scared-straight-profitable/\r\n\r\n",  "ip" : "71.204.153.250",  "useragent" : "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.0.3) Gecko/2008092414 Firefox/3.0.3",  "isAdmin" : false,  "cid" : ObjectId("007a6c79ef79ef486a10a300") },   {   "author" : "Startup CEO",   "email" : "nicene.marks@gmail.com",   "url" : null,   "ts" : ISODate("2008-10-10T18:12:02.172Z"),   "text" : "So my question of the day is: Do the VCs become humble, or do they become bigger dicks.",   "ip" : "207.118.35.148",  "useragent" : "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; SU 3.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; InfoPath.2; .NET CLR 3.0.04506.648)",   "isAdmin" : false,  "cid" : ObjectId("0bb9b914f29aef4820ca1900") },   {   "author" : "Russ",  "email" : "rpage@fiftystudio.com",  "url" : "http://www.russpage.net",  "ts" : ISODate("2008-10-10T22:34:57.157Z"),   "text" : "And why shouldn't a business always run this way?",   "ip" : "207.108.170.252",   "useragent" : "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.3) Gecko/2008092414 Firefox/3.0.3",  "isAdmin" : false,  "cid" : ObjectId("007a6c7991d8ef485961a300") },   {   "author" : "Tom",   "email" : "tom@originalevents.biz",   "url" : null,   "ts" : ISODate("2008-10-11T23:35:19.732Z"),   "text" : "What these very financhially successful people are saying, don't spend, thereby propelling the economy into a further tailspin.\r\nOf course if they themselves participated in selling junk, they deserve to go into a tailspin.",   "ip" : "63.192.54.47",  "useragent" : "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; FunWebProducts; .NET CLR 1.1.4322)",  "isAdmin" : false,  "cid" : ObjectId("5b7a6c793738f1488ac34c00") } ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48122aae14b9b96d0083b48c\" border=\"0\" alt=\"beatenup.jpg\" title=\"beatenup.jpg\" width=\"287\" height=\"218\" />Om Malik hits up his sources and gets more detail on who said what at <a href=\"http://www.alleyinsider.com/2008/10/vcs-angels-to-startups-look-out-for-that-meteor-that-just-hit-you-/page/1\">Sequoia's \"Holy S**t\" meeting</a> earlier this week. He now has summaries of presentations from four of the firm's VCs. Do you work for or with a Sequoia-funded company? <a href=\"http://gigaom.com/2008/10/09/what-startups-can-learn-from-sequoias-doomsday-warning/\">Best be on your toes</a>.</p>\r\n<p>UPDATE: Thanks to our reader \"JoeInsider\" for providing even more detailed notes, in the <a href=\"http://www.alleyinsider.com/2008/10/sequoia-s-startup-advice-save-cash-slash-costs-stay-alive#comment-48ee83c614b9b92b0064eb60\">comments below</a>. And now, via <a href=\"http://venturebeat.com/2008/10/10/the-sequoia-rip-good-times-presentation-get-your-copy-here/\">VentureBeat's Eric Eldon</a>, here's the slides from the presentation:</p>\r\n<p>&nbsp;</p>\r\n<div id=\"__ss_648808\" style=\"width: 425px; text-align: left;\"><a href=\"http://www.slideshare.net/eldon/sequoia-capital-on-startups-and-the-economic-downturn-presentation?type=powerpoint\" title=\"Sequoia Capital on startups and the economic downturn\">Sequoia Capital on startups and the economic downturn</a> \r\n<object style=\"margin:0px\" width=\"425\" height=\"355\">\r\n<param name=\"movie\" value=\"http://static.slideshare.net/swf/ssplayer2.swf?doc=sequoia-1223625495238287-9&amp;stripped_title=sequoia-capital-on-startups-and-the-economic-downturn-presentation\" />\r\n<param name=\"allowFullScreen\" value=\"true\" />\r\n<param name=\"allowScriptAccess\" value=\"always\" /><embed type=\"application/x-shockwave-flash\" width=\"425\" height=\"355\" src=\"http://static.slideshare.net/swf/ssplayer2.swf?doc=sequoia-1223625495238287-9&amp;stripped_title=sequoia-capital-on-startups-and-the-economic-downturn-presentation\" allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>\r\n</object>\r\n<div style=\"font-size:11px;font-family:tahoma,arial;height:26px;padding-top:2px;\">View SlideShare <a href=\"http://www.slideshare.net/eldon/sequoia-capital-on-startups-and-the-economic-downturn-presentation?type=powerpoint\" title=\"View Sequoia Capital on startups and the economic downturn on SlideShare\">presentation</a> or <a href=\"http://www.slideshare.net/upload?type=powerpoint\">Upload</a> your own. (tags: <a href=\"http://slideshare.net/tag/depression\">depression</a> <a href=\"http://slideshare.net/tag/recession\">recession</a>)</div>\r\n</div>\r\n<p><strong>Mike Moritz: </strong>His message to companies was don&rsquo;t worry about getting ahead, instead, &ldquo;We&rsquo;re talking survive. Get this point into your heads.&rdquo; He warned that companies need to be cash-flow positive, and if they are not, then they need to get there now, because raising capital without being cash-flow positive is going to be tough.</p>\r\n<p><strong>Eric Upin:</strong> Het old the room that we are in the beginning of a long cycle, what he called a &ldquo;secular bear market.&rdquo; This could be a 15-year problem, he said. Advice:</p>\r\n<p style=\"padding-left: 30px;\">* Cut spending. Cut fat. Preserve capital.<br /> * Throw out the models and spreadsheets, because all assumptions will be wrong.<br /> * Focus on quality.<br /> * Reduce risk.</p>\r\n<p><strong>Michael Beckwith:</strong> Cuts in spending will accelerate in the fourth quarter and the first quarter of 2009, and pointed to eBay as an example.</p>\r\n<p><strong>Doug Leone: </strong>This downturn is a different animal and one from which it will take &ldquo;years to recover.&rdquo; Advice:</p>\r\n<p style=\"padding-left: 30px;\">* Start with zero-based budgeting.<br /> * Cutting deeper is the formula to survive, and this is an era of survival of the quickest.<br /> * Make sure you have one year&rsquo;s worth of cash.<br /> * If you have a product, reduce expenses around it and boost sales. If the product is ready, cut the number of engineers.<br /> * Focus on building the absolutely essential features in your product.<br /> * Be brutal when it comes to marketing &mdash; anything that isn&rsquo;t working, cut it.<br /> * Don&rsquo;t burn through your cash, for cash is king.<br /> * Cut base salaries on sales people and leverage them with upside.<br /> * Most importantly, be true to yourself.</p>\r\n<p><strong>See Also:</strong> <a href=\"http://www.alleyinsider.com/2008/10/vcs-angels-to-startups-look-out-for-that-meteor-that-just-hit-you-/page/1\">Sorry Startups. Party's Over</a></p>", "excerpt" : "More details -- now including slides! -- from the VC firm's \"Time To Panic\" presentation. &ldquo;We&rsquo;re talking survive. Get this point into your heads.&rdquo;", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/sequoia-s-startup-advice-save-cash-slash-costs-stay-alive", "ticker" : [ ], "title" : "Sequoia's Startup Advice: Save Cash, Slash Costs, Stay Alive", "ts" : ISODate("2008-10-09T20:49:00Z"), "type" : "story", "vertical" : "sai", "vertical_river" : true, "verticals" : [  "sai" ], "views" : 911 },
  // { "_id": "007a6c79378def48e920a300", "author" : "Caroline Waxler", "browser_title" : "Wives Freaking Out on Message Boards", "categories" : [  "Women",  "Finance",  "Financial Crisis",  "Financial Crisis" ], "cls" : "entry", "comment_count" : 0, "comment_notify" : false, "comments" : [ ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48ece30d796c7a3300ffbedb\" border=\"0\" alt=\"smashedcomputer.jpg\" title=\"smashedcomputer.jpg\" width=\"300\" height=\"233\" />And even worse, they apparently call their spouses DH, as in Dear Husband. Ewww.</p>\r\n<p style=\"padding-left: 60px;\"><a href=\"http://www.thedailybeast.com/blogs-and-stories/2008-10-10/meltdown-on-the-message-boards/\">The Daily Beast</a>: Anxiety about laid-off DHs (dear husbands), mortgage shock, and depression have hit women&rsquo;s message boards hard:</p>\r\n<p style=\"padding-left: 60px;\"><a href=\"http://messageboards.ivillage.com/n/mb/message.asp?webtag=iv-ppfrugal&amp;msg=45970.1&amp;ctx=0\" target=\"_blank\"><strong>izyanalexsmommy</strong></a></p>\r\n<p style=\"padding-left: 60px;\">So today's the day, <strong>dh's last day of work - laid off after 20 years</strong> of service &amp; never one bad review.</p>\r\n<p style=\"padding-left: 60px;\"><strong>I was sick to my stomach</strong> as I suggested maybe he take an empty box with him today.... but that's only half as sick as I feel realizing <strong>we've got to tell the kids why dad's not going to work tomorrow.</strong> How do you do it?</p>\r\n<p style=\"padding-left: 60px;\">When they were small, they'd always ask Daddy not to go to work, to stay home with them (they adore him), and we've always explained that Daddy has to work to make money to pay for ... you know, everything. So now, at 6 and 9, they understand the need for work (and money)....so how do we explain no work (they're not dumb, I'm sure it'll strike fear about no money).</p>\r\n<p style=\"padding-left: 60px;\"><a href=\"http://www.thedailybeast.com/blogs-and-stories/2008-10-10/meltdown-on-the-message-boards/\">READ MORE....</a></p>", "excerpt" : "And we thought CNBC was the pulse.", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/wives-freaking-out-on-ivillage-message-boards", "ticker" : [ ], "title" : "Wives FREAKING OUT On iVillage Message Boards", "ts" : ISODate("2008-10-10T17:27:00Z"), "type" : "story", "vertical" : null, "vertical_river" : true, "verticals" : [ ], "views" : 80 },
  // { "_id": "007a6c793a96ef48602ba300", "author" : "John Carney", "browser_title" : "", "categories" : [ ], "cls" : "entry", "comment_count" : 3, "comment_notify" : false, "comments" : [  {   "author" : "StM",   "email" : "stmarc@datahero.com",  "url" : null,   "ts" : ISODate("2008-10-10T18:51:22.435Z"),   "text" : "The following adage will be carved in letters of fire above the doors of every government building when I am King:\r\n\r\n\"For every consequence you intend, an action will have three unintended consequences, one of which will be bad. Be sure your intentions justify the risk.\"\r\n\r\nAnd before anybody says that the logical result of this is to take almost no actions, THAT IS WHAT I WANT GOVERNMENTS TO DO.",  "ip" : "76.243.235.134",  "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1",   "isAdmin" : false,  "cid" : ObjectId("e2b9b9142aa4ef486ae3ee00") },   {   "author" : "Fire Cox",  "email" : "zoso_17@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-10T18:58:53.431Z"),   "text" : "What are these guys thinking? It's like the captain of the Titanic ordering everyone to lock themselves in their cabins.",  "ip" : "68.100.66.43",  "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.30 Safari/525.13",   "isAdmin" : false,  "cid" : ObjectId("007a6c79eda5ef48e93aa300") },   {   "author" : "anonymous",   "email" : "alonely@yahoo.com",  "url" : null,   "ts" : ISODate("2008-10-13T06:01:29.825Z"),   "text" : "With <a href=\"http://www.trpconverter.com\">trp converter</a>, you shall have rich options to adjust video settings and set audio properties. this excellent conversion tool provides other functions, for example, adjust video effect, crop movie, join Trp files together and trim any segment casually from you TRP videos as you like.",  "ip" : "221.220.194.134",   "useragent" : "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.1.16) Gecko/20080702 Firefox/2.0.0.16",   "isAdmin" : false,  "cid" : ObjectId("07b9b9143ae4f24857f13f00") } ], "content" : "<p><img class=\"float_right\" src=\"/~~/f?id=48ebca1e14b9b94d0053a970\" border=\"0\" alt=\"ChrisCoxSECVillian.jpg\" title=\"ChrisCoxSECVillian.jpg\" width=\"223\" height=\"254\" />The Get Shorty Squad is still scheming the reign in short-selling. Apparently the New York Stock Exchange and Nasdaq Stock Market have drafted rules that would ban short selling any stock that a stock that closes down more than 20 percent. The rules may be submitted to the SEC today, <a href=\"http://www.bloomberg.com/apps/news?pid=20601087&amp;sid=azAW6yfRS3Rc&amp;refer=home\">Bloomberg says</a>.</p>\r\n<p>On a day like today, with the S&amp;P down almost 7%, that would mean every company whose stock underperforms the market would have a decent chance of getting protected. Interestingly, this could actually wind up accelerating declines. If you see a stock dip more than 10%, you'll know that you'd better get your short position on quickly or risk getting locked out of the trade. So declines will be followed by massive shorting, leading to greater declines. This is going to be ugly.</p>", "excerpt" : "", "external" : false, "homepage_river" : true, "live" : true, "name" : "2008/10/new-short-ban-planned-to-protect-crappy-stocks", "ticker" : [ ], "title" : "New Short Ban Planned To Protect Crappy Stocks", "ts" : ISODate("2008-10-10T17:42:00Z"), "type" : "story", "vertical" : "clusterstock", "vertical_river" : true, "verticals" : [  "clusterstock" ], "views" : 9 },
  {
	"_id" : ObjectId("53d57db7e9ea23905fb7acd9"),
	"attached_images" : [
		{
			"_id" : "53331632e9ea23244db7acd9",
			"source" : "http://img.ffffound.com/static-data/assets/6/0b03fda489ac03e5f866a6054f67fc3da93a9af0_m.jpg",
			"link" : "",
			"caption" : "some cap",
			"click_to_enlarge" : "1",
			"on_image_source" : "true"
		}
	],
	"author" : [
		"Aaron Tidwell",
		"AOL Jobs",
		"Aedin Donnelly"
	],
	"authors" : [
		DBRef("blog.authors", ObjectId("4fb40de7333dba0605000003")),
		DBRef("blog.authors", ObjectId("4ecc0875eab8ea5328000014")),
		DBRef("blog.authors", ObjectId("4e2428b44bd7c851130f0000"))
	],
	"auto_suggest" : false,
	"autotweet" : true,
	"autotweet_creator" : true,
	"browser_title" : "art title y0",
	"categories" : [
		"Mobile",
		"Cloud Computing",
		"Software As A Service",
		"Sponsor Post",
		"apple"
	],
	"cls" : "entry",
	"content" : "<p>content in stuff<img src=\"http://img.ffffound.com/static-data/assets/6/0b03fda489ac03e5f866a6054f67fc3da93a9af0_m.jpg\" border=\"0\" alt=\"infopng\"></p>",
	"content_header" : "<p>ad sponsor msg</p>",
	"content_header_expires_at" : ISODate("1970-01-01T00:00:00Z"),
	"contributed" : true,
	"corner" : "video",
	"create_time" : ISODate("2014-07-27T22:31:19.552Z"),
	"create_user" : "Aaron Tidwell",
	"disable_related_video" : true,
	"editor" : "Aaron Tidwell",
	"embedded_objects" : [ ],
	"enable_bridge_ads" : true,
	"enable_simplereach" : true,
	"excerpt" : "<p>stubtitle</p>",
	"external_url" : "http://www.google.com",
	"flags" : [
		"original",
		"disable_ticker",
		"standout",
		"disable_pageviews",
		"disable_comments",
		"disable_embed",
		"disable_right_sidebar",
		"high_traffic",
		"exclude_readme"
	],
	"homepage_river" : true,
	"image" : "53d5a9cde9ea236546b7acda",
	"images" : [
		{
			"id" : "53331632e9ea23244db7acd9",
			"alt" : "infopng",
			"class" : "",
			"width" : "1200",
			"height" : "858"
		}
	],
	"layout" : "default",
	"live" : true,
	"meta_description" : "this post is so metttttta",
	"modify_time" : ISODate("2014-07-28T01:41:05.438Z"),
	"modify_user" : "Aaron Tidwell",
	"name" : "sc/art-title-y0-2014-7",
	"original_url" : "http://www.google.com",
	"perfect_market_flags" : [ ],
	"public_preview" : true,
	"public_preview_token" : "9c90482",
	"publication_id" : ObjectId("4d4b3232ccd1d54b11160000"),
	"related_posts" : [
		DBRef("blog.posts", ObjectId("525d948b333dbaeb3c000002"))
	],
	"related_video" : ObjectId("4f90757fecad045e03000044"),
	"review" : true,
	"review_note" : "a note for you, mr editor",
	"review_user" : "Aaron Tidwell",
	"sailthru_weight" : 1000000000,
	"see_also_links" : [
		{
			"intro" : "SEE ALSO:",
			"link_text" : "some text",
			"url" : "http://www.google.com"
		}
	],
	"spellcheck_ignore" : [ ],
	"sponsor_logo" : "535e6e99e9ea232863b7acd9",
	"sponsor_name" : "spsr name",
	"sponsor_tracking_pixel" : "http://www.google.com",
	"thumbnail_wide" : "519a99b5333dba7c4a000000",
	"ticker" : [
		"APPL"
	],
	"title" : "art title y0",
	"ts" : ISODate("2014-07-28T01:36:00Z"),
	"tweet" : "twwwwt txt man yea",
	"tweetincludeimage" : true,
	"type" : "story",
	"vertical" : "sai",
	"vertical_river" : true,
	"verticals" : [
		"sai",
		"sportspage",
		"enterprise"
	],
	"views" : 0
},
{
	"_id" : ObjectId("51d1dfa669bedd944a000011"),
	"attached_images" : [
		{
			"_id" : "51d1dd54eab8ea806100000a",
			"source" : "favstar.fm",
			"link" : "",
			"caption" : ""
		},
		{
			"_id" : "51d1de73eab8eaab63000010",
			"source" : "Screen grab from Vine",
			"link" : "",
			"caption" : ""
		}
	],
	"author" : [
		"Philip Johnson"
	],
	"authors" : [
		DBRef("blog.authors", ObjectId("519a342f6bb3f79259000000"))
	],
	"auto_suggest" : false,
	"autotweet" : false,
	"browser_title" : "Girl Selfie Running On Baseball Field",
	"categories" : [
		"College Sports",
		"Vine",
		"College World Series",
		"Baseball",
		"Video"
	],
	"cls" : "entry",
	"comment_count" : 9,
	"comments" : [],
	"content" : "<p>A young lady named Kayleigh Hill of Omaha, Nebraska and two of her friends decided they would run on the field during play at the College World Series if their friends promised on Twitter to pay their bail.</p>\r\n<p><img src=\"/image/51d1dd54eab8ea806100000a-569-255/screen shot 2013-07-01 at 3.48.04 pm.png\" border=\"0\" alt=\"CWS Girl running vine\" /></p>\r\n<p>In the sixth inning of UCLA's 8-0 win over Mississippi State, the girls made a run for it. What made the move memorable was Hill's decision to record her ramble on Vine. The recording was since removed, but it survives in .gif form:</p>\r\n<p><img src=\"http://i.imgur.com/rQkT8pu.gif\" border=\"0\" width=\"800\" height=\"800\" style=\"-webkit-user-select: none;\" /></p>\r\n<p>The Vine is amazing, but Hill's greatest contribution is this screen grab:</p>\r\n<p><img src=\"/image/51d1de73eab8eaab63000010-1200-899/vine-girl-cws-baseball.jpg\" border=\"0\" alt=\"Vine girl CWS baseball\" width=\"800\" /></p>\r\n<p>Television has taken the approach of never showing fans on the field in an effort to remove the fame people believe they will receive, but the&nbsp;<span>proliferation of recording apps make such behavior a potential pattern.</span></p>",
	"content_header" : "",
	"content_header_expires_at" : ISODate("1970-01-01T00:00:00Z"),
	"corner" : "",
	"create_time" : ISODate("2013-07-01T19:59:34.647Z"),
	"create_user" : "Philip Johnson",
	"disable_related_video" : false,
	"editor" : "Philip Johnson",
	"excerpt" : "<p>Infamy.&nbsp;</p>",
	"external_url" : "",
	"flags" : [ ],
	"homepage_river" : true,
	"image" : "51d1de6aecad04514500000e",
	"images" : [
		{
			"id" : "51d1dd54eab8ea806100000a",
			"alt" : "CWS Girl running vine",
			"class" : "",
			"width" : "569",
			"height" : "255"
		},
		{
			"id" : "51d1de73eab8eaab63000010",
			"alt" : "Vine girl CWS baseball",
			"class" : "",
			"width" : "800",
			"height" : "899"
		}
	],
	"last_comment_date" : ISODate("2013-07-01T23:26:55.451Z"),
	"layout" : "default",
	"live" : true,
	"meta_description" : "A young lady made an infamous Vine recording of her ramble across a College World Series baseball diamond. The screen grab of her getting tackled is legendary. ",
	"modify_time" : ISODate("2013-07-01T20:12:17.162Z"),
	"modify_user" : "Leah Goldman",
	"name" : "girl-selfie-running-on-baseball-field-2013-7",
	"original_url" : "",
	"perfect_market_flags" : [ ],
	"public_preview" : false,
	"publication_id" : ObjectId("51d1e2a16bb3f74e61000001"),
	"related_video" : ObjectId("51ca0ca2eab8ea7863000000"),
	"review" : false,
	"review_note" : "",
	"review_user" : "Leah Goldman",
	"sailthru_weight" : 1,
	"see_also_links" : [ ],
	"short_url" : "http://read.bi/18rqf8G",
	"spellcheck_ignore" : [ ],
	"thumbnail_wide" : "51d1df4b6bb3f78c5800001e",
	"title" : "Girl Takes Incredible Selfie While Being Escorted Off A Baseball Field",
	"ts" : ISODate("2013-07-01T20:12:00Z"),
	"tweet" : "Girl takes an incredible selfie while being escorted off a baseball field",
	"type" : "story",
	"vertical" : "sportspage",
	"vertical_river" : true,
	"verticals" : [
		"sportspage"
	],
	"views" : 8499
},
{
	"_id" : ObjectId("51d1f1386bb3f7b47400001f"),
	"attached_images" : [ ],
	"author" : [
		"Philip Johnson"
	],
	"authors" : [
		DBRef("blog.authors", ObjectId("519a342f6bb3f79259000000"))
	],
	"auto_suggest" : false,
	"autotweet" : true,
	"browser_title" : "Best NBA Video Bombs Of The Year",
	"categories" : [
		"NBA",
		"Chris Bosh",
		"Video",
		"LeBron James",
		"Blake Griffin"
	],
	"cls" : "entry",
	"content" : "<p>NBA.com just posted a collection of its best video bombs of the year. It's hilarious.&nbsp;</p>\r\n<p>Miami Heat goof Chris Bosh makes several appearances, frequently displaying his legendary <a href=\"http://www.businessinsider.com/chris-bosh-face-2012-6?op=1\">Chris Bosh face</a>.</p>\r\n<p>Other stars like Chris Paul, LeBron James, Blake Griffin and Chauncey Billups all appear in a great public relations move.</p>\r\n<p><iframe width=\"620\" height=\"335\" frameborder=\"0\" src=\"//www.youtube.com/embed/te9hrT8swFY\"></iframe></p>",
	"content_header" : "",
	"content_header_expires_at" : ISODate("1970-01-01T00:00:00Z"),
	"corner" : "",
	"create_time" : ISODate("2013-07-01T21:14:32.700Z"),
	"create_user" : "Philip Johnson",
	"disable_related_video" : false,
	"editor" : "Philip Johnson",
	"excerpt" : "<p>The NBA's big stars are really good at video bombs.</p>",
	"external_url" : "",
	"flags" : [ ],
	"homepage_river" : true,
	"image" : "51d1f0cb69bedd466e000005",
	"images" : [ ],
	"layout" : "default",
	"live" : true,
	"meta_description" : "The NBA just released a compilation of the best video bombs of the year. Chris Bosh face dominates the collection.",
	"modify_time" : ISODate("2013-07-02T02:31:35.879Z"),
	"modify_user" : "Leah Goldman",
	"name" : "best-nba-video-bombs-of-the-year-2013-7",
	"original_url" : "",
	"perfect_market_flags" : [ ],
	"public_preview" : false,
	"publication_id" : ObjectId("51d23b87eab8ea391d000008"),
	"publish_date" : ISODate("2014-07-21T15:51:27Z"),
	"related_video" : ObjectId("51ca0ca2eab8ea7863000000"),
	"review" : false,
	"review_note" : "",
	"review_user" : "Leah Goldman",
	"sailthru_weight" : 1,
	"see_also_links" : [ ],
	"short_url" : "http://read.bi/18rzHJ8",
	"spellcheck_ignore" : [ ],
	"thumbnail_wide" : "51d1f0ea69bedd0f6e00001f",
	"title" : "The NBA's Best Video Bombs Of The Year",
	"ts" : ISODate("2014-07-21T15:51:27Z"),
	"tweet" : "The NBA's best video bombs of the year",
	"type" : "story",
	"vertical" : "sportspage",
	"vertical_river" : true,
	"verticals" : [
		"sportspage"
	],
	"views" : 689
},
{
	"_id" : ObjectId("51d208b86bb3f72e2400000a"),
	"attached_images" : [ ],
	"author" : [
		"Geoffrey Ingersoll"
	],
	"authors" : [
		DBRef("blog.authors", ObjectId("4f7c6c9fecad046844000008"))
	],
	"auto_suggest" : false,
	"autotweet" : false,
	"browser_title" : "Plane Crashes In German Airshow",
	"categories" : [
		"Crash",
		"Plane Crash",
		"Germany"
	],
	"cls" : "entry",
	"content" : "<p>The video shows a low-flying plane in an airshow in Germany.</p>\r\n<p>The plane buzzes the audience, then clearly heard is the engine sputtering. Then the crash.</p>\r\n<p>The stunt pilot died on the scene.</p>\r\n<p><iframe width=\"640\" height=\"360\" frameborder=\"0\" src=\"http://www.liveleak.com/ll_embed?f=ab0d1b51f7a3\"></iframe></p>",
	"content_header" : "",
	"content_header_expires_at" : ISODate("1970-01-01T00:00:00Z"),
	"corner" : "",
	"create_time" : ISODate("2013-07-01T22:54:48.135Z"),
	"create_user" : "Geoffrey Ingersoll",
	"disable_related_video" : false,
	"editor" : "Geoffrey Ingersoll",
	"excerpt" : "<p>He didn't survive.</p>",
	"external_url" : "",
	"flags" : [ ],
	"homepage_river" : true,
	"image" : "51d208a669bedda51f000008",
	"images" : [ ],
	"layout" : "default",
	"live" : true,
	"meta_description" : "Another tragic accident at an air show in Germany takes the life of a stunt pilot.",
	"modify_time" : ISODate("2013-07-02T00:38:32.185Z"),
	"modify_user" : "Henry Blodget",
	"name" : "plane-crashes-in-german-airshow-2013-7",
	"original_url" : "",
	"perfect_market_flags" : [ ],
	"public_preview" : false,
	"publication_id" : ObjectId("51d221086bb3f7104d00001d"),
	"publish_date" : ISODate("2014-07-20T01:51:27Z"),
	"related_video" : ObjectId("51c8402cecad04bf3600002f"),
	"review" : false,
	"review_note" : "",
	"review_user" : "Geoffrey Ingersoll",
	"sailthru_weight" : 1,
	"see_also_links" : [ ],
	"short_url" : "http://read.bi/15c3wu6",
	"spellcheck_ignore" : [ ],
	"thumbnail_wide" : "51d208b2eab8ea903900000d",
	"title" : "Video Shows Stunt Pilot Losing Control And Crashing Plane In German Airshow",
	"ts" : ISODate("2014-07-20T01:51:27Z"),
	"tweet" : "",
	"type" : "story",
	"vertical" : "defense",
	"vertical_river" : true,
	"verticals" : [
		"defense",
		"transportation"
	],
	"views" : 1914
},
{
	"_id" : ObjectId("51cf7c30ecad046c3a000010"),
	"attached_images" : [
		{
			"_id" : "51cf8262ecad04d04b000001",
			"source" : "REUTERS/Jason Reed",
			"link" : "http://pictures.reuters.com/C.aspx?VP3=SearchResult_VPage&VBID=2C0BXZL70NPUN&SMLS=1&RW=1817&RH=831#/SearchResult_VPage&VBID=2C0BXZL70NPUN&SMLS=1&RW=1817&RH=831&PN=1",
			"caption" : ""
		}
	],
	"author" : [
		"Paul Szoldra"
	],
	"authors" : [
		DBRef("blog.authors", ObjectId("4fc2f8046bb3f7015e000017"))
	],
	"auto_suggest" : false,
	"autotweet" : true,
	"autotweet_creator" : true,
	"browser_title" : "New Slides Revealed In NSA Prism Spying",
	"categories" : [
		"NSA",
		"Washington Post",
		"PRISM",
		"Spying"
	],
	"cls" : "entry",
	"comment_count" : 3,
	"comments" : [],
	"content" : "<p><img class=\"float_right\" src=\"/image/51cf8262ecad04d04b000001-1200-924/nsa-22.jpg\" border=\"0\" alt=\"NSA\" width=\"800\" />Four new slides detailing more of the top-secret NSA program known as PRISM&nbsp;<a href=\"http://www.washingtonpost.com/wp-srv/special/politics/prism-collection-documents/?Post+generic=%3Ftid%3Dsm_twitter_washingtonpost\">were&nbsp;released Saturday</a> by&nbsp;The Washington Post.</p>\r\n<p>The slides &mdash; <a href=\"http://www.businessinsider.com/edward-snowden-nsa-2013-6\">given to the Post by&nbsp;</a><span style=\"font-size: 15px; line-height: 1.5em;\"><a href=\"http://www.businessinsider.com/edward-snowden-nsa-2013-6\">former NSA contractor Edward Snowden</a> &mdash; show more detail of the flow of information from private companies to the NSA, how the information was analyzed, and how many people were targeted by the PRISM program.</span></p>\r\n<p>The new slides show more details of NSA's possible \"direct access\" into private companies servers &mdash; appearing to show surveillance gear installed on-site by the FBI.</p>\r\n<p>The first slide&nbsp;<span style=\"font-size: 15px; line-height: 1.5em;\">shows the targeting process of an NSA analyst, with supervisor and FBI oversight to ensure that American citizens are not being targeted.&nbsp;<span>On the second slide, a flow chart is shown, with private companies &mdash; such as Yahoo or Google &mdash; first providing data to the FBI, then on to the NSA or other agencies for processing upon request.</span></span></p>\r\n<p><span style=\"font-size: 15px; line-height: 1.5em;\">As Joe Pollicino <a href=\"http://www.engadget.com/2013/06/29/washington-post-reveals-new-prism-slides-offers-greater-clarity/?utm_medium=feed&amp;utm_source=feedly\">points out at Engadget</a>, live monitoring of voice, text, and instant messages &mdash; \"<a href=\"http://www.businessinsider.com/edward-snowden-nsa-2013-6\">[watching] your ideas form as you type</a>\" as Edward Snowden mentioned &mdash; is indeed possible.</span></p>\r\n<p><a href=\"http://www.guardian.co.uk/world/2013/jun/30/washington-post-new-slides-prism\">From The Guardian:</a></p>\r\n<p style=\"padding-left: 30px;\">The data is intercepted by the FBI's \"Data Intercept Technology Unit\", the new slides suggest. From there it can be analysed by the FBI itself, or can be passed to the&nbsp;<a href=\"http://www.guardian.co.uk/world/cia\" title=\"More from guardian.co.uk on CIA\">CIA</a>&nbsp;\"upon request\".</p>\r\n<p style=\"padding-left: 30px;\">It also automatically passes to various monitoring sections within the&nbsp;<span class=\"gia-popupTerm\" data-term_id=\"NSA\"><span class=\"gia-popupAnchor\"></span>NSA</span>. These include, the annotated slides suggest, databases where intercepted content and data is stored: Nucleon for voice, Pinwale for video, Mainway for call records and Marina for internet records.</p>\r\n<p>Perhaps the most interesting slide is the fourth, which says there were&nbsp;<span>117,675 active surveillance targets in the Prism database, as of April 5.</span></p>\r\n<p><span><a href=\"http://www.businessinsider.com/qa-11-things-you-should-know-about-domestic-spying-2013-6\">The Prism program, first revealed on June 6, reportedly allows</a>&nbsp;the NSA to gain access to a number of major internet companies, including Google, Facebook, and Skype.</span></p>\r\n<p><span style=\"font-size: 15px; line-height: 1.5em;\">All the companies named have strongly denied any involvement and James Clapper, the Director of National Intelligence, has </span><a href=\"http://www.businessinsider.com/intelligence-chief-heres-what-prism-is-2013-6\">stressed that the program is lawful.</a></p>\r\n<p>The original four slides were <a href=\"http://www.businessinsider.com/prism-prism-spying-project-slides-2013-6\">first published on June 6.</a>&nbsp;Snowden gave The Guardian and The Washington Post a <a href=\"http://www.motherjones.com/kevin-drum/2013/06/whats-other-37-prism-slides\">presentation that included 41 slides</a>, which has not yet been revealed in full.</p>",
	"content_header" : "",
	"content_header_expires_at" : ISODate("1970-01-01T00:00:00Z"),
	"corner" : "",
	"create_time" : ISODate("2013-06-30T00:30:40.755Z"),
	"create_user" : "Paul Szoldra",
	"disable_related_video" : false,
	"editor" : "Paul Szoldra",
	"excerpt" : "<p>But still not the full presentation.</p>",
	"external_url" : "",
	"flags" : [ ],
	"homepage_river" : true,
	"images" : [
		{
			"id" : "51cf8262ecad04d04b000001",
			"alt" : "NSA",
			"class" : "float_right",
			"width" : "800",
			"height" : "924"
		}
	],
	"last_comment_date" : ISODate("2013-07-02T05:33:01.250Z"),
	"layout" : "default",
	"live" : true,
	"meta_description" : "",
	"modify_time" : ISODate("2013-06-30T16:51:57.317Z"),
	"modify_user" : "Paul Szoldra",
	"name" : "new-slides-revealed-in-nsa-prism-spying-2013-6",
	"original_url" : "",
	"perfect_market_flags" : [ ],
	"public_preview" : false,
	"publication_id" : ObjectId("51d0622deab8ea4168000007"),
	"related_posts" : [
		DBRef("blog.posts", ObjectId("51bcafb4ecad040e6e000026")),
		DBRef("blog.posts", ObjectId("51b72f25ecad046003000006")),
		DBRef("blog.posts", ObjectId("51b9d0c1ecad046d0d00002b"))
	],
	"related_video" : ObjectId("51bb269669bedde92800000d"),
	"review" : false,
	"review_note" : "",
	"review_user" : "Robert Johnson",
	"sailthru_weight" : 1,
	"see_also_links" : [
		{
			"intro" : "NOW:",
			"link_text" : "See the new Prism slides at the Washington Post",
			"url" : "http://www.washingtonpost.com/wp-srv/special/politics/prism-collection-documents/?Post+generic=%3Ftid%3Dsm_twitter_washingtonpost"
		}
	],
	"short_url" : "http://read.bi/12v6vg3",
	"spellcheck_ignore" : [ ],
	"title" : "4 New Slides Of The NSA's PRISM Spying Program Have Been Published",
	"ts" : ISODate("2013-06-30T01:09:00Z"),
	"tweet" : "3 new slides released show more of the #NSA Prism spying program",
	"type" : "story",
	"vertical" : "defense",
	"vertical_river" : true,
	"verticals" : [
		"defense",
		"law",
		"politics"
	],
	"views" : 9131
}
];

function DBRef(ref){
  return ref;
}

function ISODate(date){
  return date;
}

function ObjectId(id){
  return id;
}

function find(id){
	return lib.searcher(posts, '_id', id);
}

function index(id){
	return lib.getIndex(posts, '_id', id);
}

module.exports = {
	posts: posts,
	find: find,
	index: index
}
