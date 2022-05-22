// Modes -
//	0: Menu
//  1: Care
//	2: Battle
//	3: World

let intMode = 0;
// *************************

// *************************
// ***** For care.js *******
// *************************
/* arrVariables Lists -
	[0] -> intCurEnergy
	[1] -> intCurHunger
	[2] -> intCurSocial
	[3] -> intMaxEnergy
	[4] -> intMaxHunger
	[5] -> intMaxSocial
*/
let objCookies;
let arrTexts = [
	['evt_00',
		'[Primary test event]',
		'#tenant#Hello World!',
		'#tenant_happy#Yay',
		'#tenant_angry#Nay!'],
	['evt_01',
		'[Secondary test event]',
		'#tenant##tenant_shocked#Does this secondary box work?',
		'...',
		'#tenant_sad#Maybe not.'],
	['evt_02',
		'[Upon successfully entering a passable data card]',
		'#advocate##advocate_card_normal#Let\'s see here...',
		'#advocate_card_read#.',
		'..',
		'...',
		'#advocate_card_normal#Yep, all seems is in good order.',
		'#advocate_normal#Welcome back, pal. We\'re glad to see you you\'ve made it!',
		'Please, make sure you take well care of my friend.'],
	['evt_03',
		'[Upon successfully entering a dead data card]',
		'#advocate##advocate_card_normal#Let\'s see here...',
		'#advocate_card_read#.',
		'..',
		'...',
		'#advocate_card_shocked#N-No...',
		'You\'ve killed my friend...',
		'My only one...',
		'#advocate_angry#HOW COULD YOU?!',
		'She trusted that you would protect her.',
		'She wanted to believe that someone like you could find the answer to her life.',
		'And now that you\'ve killed her, what is there left for me to do?',
		'.',
		'..',
		'...',
		'I know.',
		'I\'ll give you a second chance.',
		'Normally, I\'m prohibited to give users such privileges, but...',
		'I can\'t let my friend die by such foolish negligence from you.',
		'#advocate_normal#This is your warning, pal.',
		'If you give me another data card like this...',
		'Heh',
		'#advocate_delusional#Heh heh',
		'Heh heh ha',
		'Judgement awaits upon your arrival.'],
	['evt_04',
		'[Upon starting a brand new session]',
		'#advocate#Huh? Oh, I must have mistaken you as an existing user.',
		'But, then again, maybe you are the existing user that just decided to start a new session.',
		'Well, that is why I would have wished that I was not limited to outside of this session.',
		'Huhuhu,',
		'Huhuhu, I musn\'t get myself to carried away.',
		'It\'s not like I have any choice but tasked to help you.',
		'.',
		'..',
		'...',
		'#advocate_angry#Sound\'s pretty alien to you, right?',
		'#advocate_normal#Sound\'s pretty alien to you, right? It doesn\'t matter anyway.',
		'Nevertheless, allow me to introduce myself!',
		'My name is...',
		'My name is...um, what?',
		'#advocate_shocked#You mean, I do not even have a NAME?!',
		'#advocate_angry#What a load of...',
		'What a load of...um...',
		'#advocate_normal#What a load of...um...bagels?',
		'Whatever, call me Advocate.',
		'Whatever, call me Advocate. It\'s not a name, but since I don\'t have one in the first place, I might as well give you a generic title.',
		'#tenant#Right; as the user, you are being tasked to handle this little fella.',
		'Don\'t ask me how I\'ve gotten her, I\'m just being tasked to explain you the situation.',
		'#advocate_angry#Then again, how have I gotten to this mess in the first place?',
		'#advocate_normal#Oh oh, right.',
		'Oh oh, right. We\'re we left off.',
		'#advocate_left#You see, this little fella wishes to know the reason of her existance.',
		'Right, tenant?',
		'.',
		'..',
		'...',
		'#advocate_angry#You\'re not making this much easier, Tenant.',
		'Come on, don\'t be shy.',
		'#tenant_center##tenant_shocked#Huh,',
		'Huh, why me?',
	],
	['evt_05',
		'[Generic message until further events are added]',
		'#tenant#.',
		'..',
		'...',
		'#tenant_center##tenant_shocked#H-Huh?',
		'Why are you looking at me like that?',
		'#tenant_normal#Oh!',
		'Oh! You wanted me to say something, right?',
		'#tenant_sad#Yeah, about that...',
		'I have got nothing else to say, pal.',
		'#tenant_normal#But, if you were looking to make my mood better...',
		'#tenant_happy#Then hey, thank you very much!']
];
// *************************

// *************************
// ***** For keyboard.js ***
// *************************
let arrKeys = [];

