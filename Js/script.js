let quoteSource=[
    {
        quote: "Սխալների դեմ պայքարելը ինքնին արվեստ է և գիտություն.",
        name:"Դավիթ Անհաղթ"
    },
    {
        quote:"Ուր որ հայրենի երգեր կլսվին` Հոն հայրենիքը ողջ է:",
        name:"Ղևոնդ  Ալիշան"
    },
    {
        quote:"Զարմանքը  փիլիսոփայության  սկիզբն է.",
        name:"Դավիթ Անհաղթ"
    },
    {
        quote:"Միտքը մեռցնում է զգացմունքը, բայց երբեմն երկուսն եղբայրացած միմյանց հետ տիեզերք են գրկում:",
        name:"Ավետիք Իսահակյան"
    },
    {
        quote:"Չլինել ժամանակից դուրս, բայց լինել ժամանակից վեր...",
        name:"Պ. Սևակ"
    },
    {
        quote:"Մի ժողովուրդ, որի որդիները հավասար չեն օրենքի եւ մահվան առջև` հաղթական հայրենիք չի ունենա:",
        name:"Գարեգին Նժդեհ"
    },
    {
        quote:"Խուսափիր այն տգետից, որն իր համար գիտնական է",
        name:"Կաբուս"
    },
    {
        quote:"Լիակատար տգիտությունը ամենամեծ չարիքը չէ. վատ յուրացված գիտելիքների կուտակումը ավելի վատ է:",
        name:"Պլատոն"
    },
    {
        quote:"Լռություն կա, որ խոսքերից պերճախոս է:",
        name:"Դերենիկ Դեմիրճյան"
    },
    {
        quote:"Ամեն մեկի կյանքում պետք է մի փոքր անձրևային եղանակ լինի, որպեսզի հետո լավ փայլատակի արևը:",
        name:"Գուրգեն Մահարի"
    },
    {
        quote:"Ոմանք արևը միայն խավարման ժամանակ են նկատում:.",
        name:"Գարեգին Նժդեհt"
    },
    {
        quote:"Ես ամիսներով և տարիներով մտածում  եմ ու մտածում:Իննսունինն անգամ արդյունքը սխալ է, 100-րդին ես ճիշտ եմ:.",
        name:" Ալբերտ Էյնշտեյն"
    },
    {
        quote:"Կենտրոնացում ահա թե որն է ուժի գաղտնիքը:",
        name:"Ռայլֆ ՈՒոլդո Էմերսոն"
    },
    {
        quote:"Ինչ անհեթեթություն էլ, որ դու ասես, նրա մեջ միշտ էլ կա ճշմարտության մի հատիկ: Դառը ճշմարտության... ",
        name:"Սալվադոր Դալի"
    },
    {
        quote:"Հիմնական սխալը այն է, որ դուք չեք գնահատում մարդկային աչքի կարևորությունը:Հասկացեք,եթե լեզուն կարող է թաքցնել ճշմարտությունը, աչքերը` երբեք:",
        name:"Միխաիլ Բուլգակով"
    },
    {
        quote:"Դու երբեք չես լուծի խնդիրը, եթե սկսես մտածել այնպես, ինչպես նրանք, ովքեր այն ստեղծել են:",
        name:"Այբերտ Էյնշտեյն"
    },
    {
        quote:"Իմաստունը հաղթում է այնպես,որ նրա հաղթանակը ոչ ոք չի զգում:",
        name:" Հուստինիանոս"
    },
    {
        quote:"Իմաստությունը, դա ամենաճշգրիտն է գիտություններից:",
        name:"Արիստոտել"
    },
    

];

document.getElementById('quoteButton').addEventListener('click', function(evt) {
    evt.preventDefault();
    
    
    let sourceLength = quoteSource.length;
    let randomNumber = Math.floor(Math.random() * sourceLength);
    
   
    let newQuoteText = quoteSource[randomNumber].quote;
    let newQuoteGenius = quoteSource[randomNumber].name;
    
    let timeAnimation = 500;
    let quoteContainer = document.getElementById('quoteContainer');
    
    
    quoteContainer.classList.remove('fade-in');
    
    
    quoteContainer.classList.add('fade-out');
    
    setTimeout(function() {
        
        quoteContainer.innerHTML = '<p>' + newQuoteText + '</p><p id="quoteGenius">' + '- ' + newQuoteGenius + '</p>';
        
        
        quoteContainer.classList.remove('fade-out');
        
        
        quoteContainer.classList.add('fade-in');
    }, timeAnimation);
});

