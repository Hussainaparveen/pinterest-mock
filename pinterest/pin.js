let postArray = [];

function createPost() {
    let postData = {
        title: document.getElementById("title").value,
        description: document.getElementById("desc").value,
        liked: false 
    };

    postArray.push(postData);
    // console.log(postArray);

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";

    addPost();
}

function addPost() {
    let divData = "";
    for (let i = 0; i < postArray.length; i++) {
        let tempData = postArray[i];

        
        let likeImage = tempData.liked ? "likeblue.png" : "like.png";

        data = `<div>${tempData.title} ${tempData.description}<img src="${likeImage}" onclick="like(${i})"></div>`;
        divData += data;
    }
    con1 = document.getElementById("con1");
    con1.innerHTML = divData;
}

function like(i) {
    postArray[i].liked = !postArray[i].liked;
    addPost(); 
}
