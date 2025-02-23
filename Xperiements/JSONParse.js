function convertJSONtoHTMLTable(jsonText) {

   var htmlTableHeaderText='';
   var htmlTableDataText='';  
   const jsonParsed = JSON.parse(jsonText);

   console.log(jsonParsed);
   
   console.log(jsonParsed[0].keys);   


   // First HTML table header formatting
   for(var propName in jsonParsed[0]){
      htmlTableHeaderText += "<th>"+jsonParsed[0][propName]+"</th>";
   }
   
   // HTML table content formatting
   for(var index=1;index<jsonParsed.length;index++){
     htmlTableDataText+="<tr>";
     for(var propName in jsonParsed[index]){
       htmlTableDataText += "<td>"+jsonParsed[index][propName]+"</td>";
     }
     htmlTableDataText+="</tr>\n";
   }

   console.log(htmlTableHeaderText);
   console.log(htmlTableDataText);

   return htmlTableHeaderText;
}
