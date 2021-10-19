import React from 'react';
// import { FacebookButton, TwitterButton } from 'react-social';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    PinterestShareButton,
    PinterestIcon,
    EmailShareButton,
    EmailIcon
  } from 'react-share';
// import { InlineShareButtons } from 'sharethis-reactjs';
import MetaTags from 'react-meta-tags';

// export const ShareButton = () =>{
//     let url = 'https://fastapi-giftcardexperience.herokuapp.com/';
//     let title = 'test';
//     return (
//     <div>
//         <div className='facebook button'>
//         <FacebookButton
//           url={url}
//           appId='189300836660773'
//           quote='test quote'
//           hashtag='#testhashtag'
//           image='https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1200x800.jpg?impolicy=website&width=510&height=356'
//         >
//           {'Facebook'}
//         </FacebookButton>
//       </div>
//       <div className='twitter button'>
//         <TwitterButton url={url} title={title} hashtag='#testhashtag'>
//           {'Twitter'}
//         </TwitterButton>
//       </div>
//     </div>
//     )
// }

// export const ShareButton = () => {
//     return (
//         <div>
//             <a
//           className='resp-sharing-button__link'
//           href='https://facebook.com/sharer/sharer.php?u=https://www.google.com'
//           target='_blank'
//           rel='noopener'
//           aria-label='Share on Facebook'
//         >
//           <div className='resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large'>
//             <div
//               aria-hidden='true'
//               className='resp-sharing-button__icon resp-sharing-button__icon--circle'
//             >
//               <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
//                 <circle cx='12' cy='12' r='11.5' />
//                 <path d='M15.84 9.5H13.5V8.48c0-.53.35-.65.6-.65h1.4v-2.3h-2.35c-2.3 0-2.65 1.7-2.65 2.8V9.5h-2v2h2v7h3v-7h2.1l.24-2z' />
//               </svg>
//             </div>
//             Facebook
//           </div>
//         </a>
//         </div>
//     )
// }

// export const ShareButton = () => {
//     return (
//         <div>
//             <MetaTags>
//           <meta id='title' property='og:title' content='test' />
//           <meta
//             id='image'
//             property='og:image'
//             content='https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1200x800.jpg?impolicy=website&width=510&height=356'
//           />
//           <meta
//             property='og:image:secure_url'
//             content='https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1200x800.jpg?impolicy=website&width=510&height=356'
//           />
//           <meta
//             id='url'
//             property='og:url'
//             content='https://fastapi-giftcardexperience.herokuapp.com/'
//           />
//           <meta
//             id='description'
//             property='og:description'
//             content='test description'
//           />
//           <meta id='site_name' property='og:site_name' content='test site' />
//         </MetaTags>
//         <div>
//           <a
//             href='https://www.facebook.com/sharer.php?u=https://fastapi-giftcardexperience.herokuapp.com/'
//             target='_blank'
//           >
//             Facebook
//           </a>
//         </div>
//         </div>
//     )
// }

export const ShareButton = () => {
    return (
        <div className='socialMediaButton'>
        <MetaTags>
          <meta
            id='image'
            property='og:image'
            content='https://d109mr28ux1v2k.cloudfront.net/offers/promo-a87f11aa-dc22-4600-baea-d699888e9055/e_top_div.jpg'
          />
          <meta
            property='twitter:image'
            content ='https://d109mr28ux1v2k.cloudfront.net/offers/promo-a87f11aa-dc22-4600-baea-d699888e9055/e_top_div.jpg'
            />
        </MetaTags>

        <FacebookShareButton
          url='https://react-redux-learning.herokuapp.com/'
          quote='Use Promo SBWAY20HOL & Purchase a $25 gift card, get a free 6'
          hashtag='#promo #giftcards'
        >
          <FacebookIcon size={32} round={false} borderRadius={23} iconFillColor={'white'}/>
        </FacebookShareButton>
        <TwitterShareButton
          url='https://react-redux-learning.herokuapp.com/'
          via='subway'
          title='Use Promo SBWAY20HOL & Purchase a $25 gift card, get a free 6'
          hashtags={['Blackhawk']}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <PinterestShareButton
          url='https://react-redux-learning.herokuapp.com/'
          media='https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1200x800.jpg?impolicy=website&width=510&height=356'
          description='test description'
        >
          <PinterestIcon size={32} round={false} borderRadius={20} />
        </PinterestShareButton>
        <EmailShareButton
          subject='BUY 1 GET 1'
          body='Now with modport giftcards you have options to get and exclsive offer to get the giftcards at affordable prize'
        >
          <EmailIcon size={32} round={false} borderRadius={20} />
        </EmailShareButton>
      </div>
    )
}

// export const ShareButton = () => {
//     return (
//         <div>
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//           html, body {
//             margin: 0;
//             padding: 0;
//             text-align: center;
//           }
//           h1 {
//             font-size: 24px;
//             font-weight: bold;
//           }
//           hr {
//             margin-bottom: 40px;
//             margin-top: 40px;
//             width: 50%;
//           }
//         `
//         }}
//       />

//       <h1>Inline Share Buttons</h1>
//       <InlineShareButtons
//         config={{
//           alignment: 'center',
//           color: 'social', 
//           enabled: true, 
//           font_size: 16, 
//           labels: 'cta', 
//           language: 'en', 
//           networks: [
             // which networks to include (see SHARING NETWORKS)
//             'facebook',
//             'twitter',
//             'pinterest',
//             'email'
//           ],
//           padding: 12, // padding within buttons (INTEGER)
//           radius: 4, // the corner radius on each button (INTEGER)
//           show_total: true,
//           size: 40, // the size of each button (INTEGER)

           // OPTIONAL PARAMETERS
//           url: 'https://fastapi-giftcardexperience.herokuapp.com/', 
//           image:
//             'https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-1200x800.jpg?impolicy=website&width=510&height=356',
//           description: 'My Description', 
//           title: 'My title', 
//           message: 'My email text', 
//           subject: 'My email subject', 
//           username: 'My twitter handle' 
//         }}
//       />
//       <hr />
//     </div>
//     )
// }

