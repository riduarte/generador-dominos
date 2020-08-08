var pronoun = ['the','our',"my","you","is"];
var adj = ['great', 'big',"fantastic","bad","fast" ];
var noun = ['jogger','racoon',"cow","beer","geeks"];
var dom= [".com",".ve",".org"];

for (let i = 0; i < pronoun.length; i++) {
    for (let i = 0; i < adj.length; i++) {
        for (let i = 0; i < noun.length; i++) {
            for (let i = 0; i < dom.length; i++) {
      
                console.log(pronoun[i].concat(adj[i]).concat(noun[i]).concat(dom[i]) ) 
            }            
        }   
    }
}


