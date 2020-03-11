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
          let div1 = document.createElement('div');
          div1.classList.add('box');
          div.appendChild(div1);
          let img = document.createElement('img');
          let imsource=response.items[i].snippet.thumbnails.high.url;
             img.setAttribute('src',imsource);
           div1.appendChild(img);

           let div2 = document.createElement('div');
          div2.classList.add('box1');
          div.appendChild(div2);
          let text1 = document.createTextNode(title);
          div.appendChild(text1);


        
          // let div1 = document.createElement('div');
          // div1.classList.add('box1');
          // div2.appendChild(div1);
          mainDiv.appendChild(div);
          }
          // document.getElementById('list1a').innerHTML += links ;
    
    }


    




 