const GOOGLE_API_KEY = "AIzaSyAjT1_3g3xoCoIYYZUJHjwq1216CdiIxEw";

export const YOUTUBE_VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key='+ GOOGLE_API_KEY; 

export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 10;


export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?key="+ GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId=";