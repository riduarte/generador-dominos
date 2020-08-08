var pronoun = ['the','our',"my","you","is"];
var adj = ['great', 'big',"fantastic","bad","fast" ];
var noun = ['jogger','racoon',"cow","beer","geeks"];
var dom= [".com",".ve",".org"];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let f = 0; f < noun.length; f++) {
            for (let r = 0; r < dom.length; r++) {
      
                console.log(pronoun[i].concat(adj[j]).concat(noun[f]).concat(dom[r]) ) 
            }            
        }   
    }
}


