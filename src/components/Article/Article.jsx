import React from 'react'

const Article = ({
  params
}) => {
  return (
    <div>
      Article:
      <div>{params.articleUrl}</div>
    </div>
  )
}

export default Article

// import {Block} from '../Layouts'
// import {Heading1, Content} from '../Typography'
//
// const Article = ({
//   article
// }) => {
//   return (
//     <div>
//       <Block n={3}>
//         <Heading1>{article.title}</Heading1>
//       </Block>
//
//       <Content text={article.content} />
//     </div>
//   )
// }
//
// export default Article
