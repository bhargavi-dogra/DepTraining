var maxRes = 15;  var counter = 0; var data=[];
var token='';
var email='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults='+maxRes+'&order=viewCount&key=*******your_google_api_Key*********&q=';
//  function searchQu(){
//       query = document.getElementById('queryText').value;
//       email = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15'+
//       '&order=viewCount&q='+ query + '&key=AIzaSyCx86o-bJlVLK9abS8xAwqdPzTm6HFpYsg'+
//       '&callback=myPlan';
//       var oldsearchS = document.getElementById('searchS');
//       if(oldsearchS){
//             oldsearchS.parentNode.removeChild(oldsearchS);
//       }
//       var s = document.createElement('script');
//       s.setAttribute('src', email);
//       s.setAttribute('id','searchS');
//       s.setAttribute('type','text/javascript');
//       document.getElementsByTagName('head')[0].appendChild(s);
//   }
//   function myPlan(response){
//       console.log(response);
     
//       data = response;
//       token=response.nextPageToken;
//       console.log(counter);  
  
//       print(data);
      
//       }

function searchQ(){
      query = document.getElementById('queryText').value;
      loadMore(email+query);
      
}

  
function print(response) {
      console.log(counter);      
      let mainDiv = document.querySelector('#list1a');
      mainDiv.innerHTML = "";
      for (var i = (counter * 3); i < ((counter * 3) + 3) && (i < maxRes); i++) {
            var videoID = response[i].id.videoId;
            var title = response[i].snippet.title;
            let div = document.createElement('div');
            div.classList.add('container');
            let img = document.createElement('img');
            let imsource = response[i].snippet.thumbnails.medium.url;
            img.setAttribute('src', imsource);
            div.appendChild(img);
            let a = document.createElement('a');
            var link = document.createTextNode(title);
            a.href = "https://www.youtube.com/watch?v=" + videoID;
            a.style.fontFamily = "Arial";
            a.style.textDecoration = "none";
            a.appendChild(link);
            div.appendChild(a);
            mainDiv.appendChild(div);
      }
}


      let forwardCount = document.getElementById('nextButton');
      forwardCount.addEventListener('click', event => {
            counter++;
            if(((counter * 3) + 3)>maxRes)
            {
                  maxRes+=15;
                  loadMore( email+query+'&pageToken='+token);
                  
            }
             else print(data);
            
      });
     
      let backwordCount = document.getElementById('previousButton');
      backwordCount.addEventListener('click', event => {
            counter--;

            if(counter <0){
                  counter = 0;
                  return ;
            }else{
             print(data);
            }
      });


      function loadMore(url){
            fetch(url)
            .then(result=>{
                  return result.json()
            }).then(response=>{
                  console.log(response);
                  
                  data =data.concat(response.items);
                  token=response.nextPageToken;
                  print(data);
                  
            })
          
      }
