var help = ["The most commonly used commands are:", "clear", "clear screen", "theme [color]", "change background color", "github", "checkout the repository", "dragon", "start dragon quest",
          ];

var dragonHelp = ["The most commonly used commands are:", "draw sword", "sign up to play the game!", "clear", "clear screen", "quit", "exit to home page", "login", "log into your game", "play", "jump into the game if already logged in", "logout", "log out of the game", "restart", "resets the game (in game)", "back", "goes back to the last question, down to the first (in game)",
        ];

var intro = [
      [
       "", "Drawing your sword was a bold move. The dragon feels threatened! It launches at you with fiery breath and sharp pointies.", "What do you do?", "[a] blindly swing your to the dragon's throat", "[b] run away!!", "[c] pray for mercy"
      ].join('\n'),
      ["Eyes full of tears you drop the sword and beg the dragon not to eat you. 'Please mighty dragon, you don't want to eat me, I'm just a programmer, I probably taste horrible'", "Surprised, the dragon stops! He stares at you and with a deep voice he asks:"
      ].join('\n'),
    ];

var quest = [
        [ "After a long pause, the dragon speaks: 'Ok... if you're telling the truth, then you would have no problem solving this problem:<br>", "var a = function(n) {(n^3) + 3 === 11 ? n - 2 : n }<br>", "console.log(a(2));<br>", "What is printed in the console?<br>",
      ].join('\n'),
        ["That was too easy, what about this one:<br>", "var myArr = ['foo', 'bar'];", "myArr.length = 0;", "myArr.push('fizz');", "console.log(myArr);", "", "What is printed in the console?"
      ].join('\n'),
       [ "Splendid! I am starting to believe you. Perhaps you can help me with my website. But first, one last test:<br>", "var myObj= {'a': 'b', 'c': ['d', {'e': 'f'}, ['g', 'h']], 'i': {'j': 'k'}}<br>", "console.log(myObj.c[2]['g'])<br>", "What is printed in the console?<br>",
      ].join('\n'),
       ["So I have this function that I use for my ingredients:<br>", "function push(i,j,k,l) {", "&nbsp;var values = [];", "&nbsp;myBlock: {", "&nbsp;values.push(i);", "&nbsp;values.push(j);", "&nbsp;break myBlock;", "&nbsp;values.push(k);", "&nbsp;}", "&nbsp;values.push(i);", "&nbsp;return values.join(',');", "}<br>", "What is printed when I console.log(push('human tears','human eyes','human toes', 'human hairs'))?<br>",
      ].join('\n'),
      ["You earned the dragon's trust! You later helped him with his cooking website and it looks gorgeous!", "The dragon spares your life and you two become besties and eat delicioius food.<br>", "THE END<br>",  "type dragon website to view",
      ].join('\n'),
    ];

var quotes = ["Haha, you must be kidding", "We all make mistakes, try again", "Your life is in danger, take this seriously", "you call yourself a programmer?", "That can't be right", "I might be a dragon, but I don't think that's right", "Take your time human, try again"];
