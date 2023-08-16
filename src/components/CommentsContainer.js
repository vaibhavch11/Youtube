import React from 'react'

const commentsData = [
    {
        name : "Vaibhav Chauhan",
        text : "Hey how's is going on?",
        replies : [
            {
                name : "Vaibhav Chauhan",
                text : "Hey how's is going on?",
                replies : [ 
                    {
                    name : "Vaibhav Chauhan",
                    text : "Hey how's is going on?",
                    replies : [{
                        name : "Vaibhav Chauhan",
                        text : "Hey how's is going on?",
                        replies : [
                            {
                            name : "Vaibhav Chauhan",
                            text : "Hey how's is going on?",
                            replies : []
                           },
                        ]
                       },]
                   },
               ]
            },
        ]
    },
    {
        name : "Vaibhav Chauhan",
        text : "Hey how's is going on?",
        replies : [
            {
                name : "Vaibhav Chauhan",
                text : "Hey how's is going on?",
                replies : []
            },
            {
                name : "Vaibhav Chauhan",
                text : "Hey how's is going on?",
                replies : []
            },
        ]
    },
    {
        name : "Vaibhav Chauhan",
        text : "Hey how's is going on?",
        replies : []
    },
    {
        name : "Vaibhav Chauhan",
        text : "Hey how's is going on?",
        replies : []
    },
]

const Comment =({data})=> {
    const {name,text} = data;
    return(
        <div className='flex my-2 bg-slate-50 p-3'>
            <div className='w-10 h-10'>
              <img alt='comment-user' src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'/>
            </div>

            <div className='px-2'>
              <p className='font-bold'>{name}</p>
              <p>{text}</p>
            </div>

        </div>
    )
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index)=>(
      <div  key={index}>
         <Comment data={comment} />

         <div className='pl-5 border border-l-black ml-5'>
            {/* <CommentsList comments={comment.replies} /> */}
            <CommentsList comments={comment.replies} />
         </div>
      </div>
      
    ))
}

const CommentsContainer = () => {
  return (
    <div>
        <h1>Comments</h1>

        

        <CommentsList comments={commentsData}/>
      {/* <Comment data={commentsData[0]}/> */}
    </div>
  )
}

export default CommentsContainer