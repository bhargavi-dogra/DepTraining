var maxRes = 15; 
 function searchQ(){
      query = document.getElementById('queryText').value;
      email = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15'+
      '&order=viewCount&q='+ query + '&key=AIzaSyCx86o-bJlVLK9abS8xAwqdPzTm6HFpYsg'+
      '&callback=myPlan';
      var oldsearchS = document.getElementById('searchS');
      if(oldsearchS){
            oldsearchS.parentNode.removeChild(oldsearchS);
      }
      var s = document.createElement('script');
      s.setAttribute('src', email);
      s.setAttribute('id','searchS');
      s.setAttribute('type','text/javascript');
      document.getElementsByTagName('head')[0].appendChild(s);
  }
    
  function myPlan(response){
    console.log(response);


          for (var i=0; i<3;i++){
      
           var videoID=response.items[i].id.videoId;
          //  if(typeof videoID != 'undefined'){    
           var title=response.items[i].snippet.title;
      //      var links = '<br><img src="http://img.youtube.com/vi/'+ videoID + 
      //           '/default.jpg" width="80" height="60">'+
      //           ''+(i+1)+ '.&nbsp;<a href="#" onclick="playVid(\''+ videoID + 
      //            '\');return false;">'+ title + '</a><br>';

      //     document.getElementById('list1a').innerHTML += links ;
      //     }
      // }

           let mainDiv =document.querySelector('#list1a');
          let div = document.createElement('div');
          div.classList.add('container');
          let img = document.createElement('img');
          let imsource=response.items[i].snippet.thumbnails.medium.url;
             img.setAttribute('src',imsource);
           div.appendChild(img);
          let text1 = document.createTextNode(title);
      //     div.appendChild(text1);
          let a = document.createElement('a');
          var link = document.createTextNode(title); 
          a.href = "https://www.youtube.com/watch?v="+videoID;  
          a.appendChild(link);
          div.appendChild(a);
          mainDiv.appendChild(div);
          }
    
    }


    




 
