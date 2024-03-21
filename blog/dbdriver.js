// import createClient from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const { createClient } = supabase;


const sbObj = createClient('https://fmlfcjxmvtoiugchkogl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbGZjanhtdnRvaXVnY2hrb2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MjQ1NTksImV4cCI6MjAyNjUwMDU1OX0.430m_xTAStmNUbh8PPVF1bGNOO8QZEEl0jOaEhXlivQ');

console.log('ello world! DB DRIVER HERE');

function getARandomText() {
    let WORDS = [
        "ケーキは嘘です", 
        "美への信頼", 
        "嘘つき", 
        "門を越えて",
        "あなたのために", 
        "あなたを愛していません",
        "私のすべてです",
        "重労働",
        "時間",
        "エントロピ",
    ];

    const randomInteger = Math.floor(Math.random() * WORDS.length);

    return WORDS[randomInteger];
}

async function getTweets() {
    const { data, error } = await sbObj
        .from('Tweets')
        .select('*');

    console.log('data:', data);
    console.log('error:', error);

    let tweetList = document.getElementById('tweetList');
    let tweetHTML = '';

    

    data.reverse().forEach(tweet => {
        tweetHTML += `
        
        <div class="tweet">
            <div class="tweet-header">
                <!--<img src="https://b6infinity.github.io/broteen_das/assets/images/meeblu.png" width="50" height="50" alt="Profile Picture" class="profile-pic">-->
                <div class="tweet-info">
                    <!-- <h3 class="tweet-author">John Doe</h3> -->
                    <!-- <p class="tweet-username">@johndoe</p> -->
                </div>
            </div>
            <div class="tweet-content">
                <h3 class="tweet-heading">${tweet.heading}</h3>
                <p class="tweet-text">${tweet.content.body}</p>
            </div>
            <div class="tweet-footer">
                    <div class="tweet-actions">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-share"></i>

                    <h2 class="glitch layers showwhenhover" data-text="${getARandomText()}"><span>${getARandomText()}</span></h2>
                </div>

                <div class="tweet-date-created"><hr>${tweet.created_at}</div>
                
            </div>
        </div>
        `;
    });

    tweetList.innerHTML = tweetHTML;


}


getTweets();