import React from 'react'

export default function Acordian(props) {
  return (
    <div className="container mb-5">
      <div>
        <h1 className='text-center mt-5 mb-5' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}>About Us</h1>
        <div className="accordion accordion-flush border" id="accordionFlushExample">
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
               <strong> 1. Blogger</strong>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Blogger is an American online content management system founded in 1999 which enables its users to write blogs with time-stamped entries. Pyra Labs developed it before being acquired by Google in 2003. Google hosts the blogs, which can be accessed through a subdomain of blogspot.com.</div>
            </div>
          </div>
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
               <strong> 2. Word press</strong>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">WordPress is a web content management system. It was originally created as a tool to publish blogs but has evolved to support publishing other web content, including more traditional websites, mailing lists and Internet forum, media galleries, membership sites, learning management systems and online stores</div>
            </div>
          </div>
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2 className="accordion-header">
              <button style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
               <strong> 3. Tumblr</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body"> Tumblr is a microblogging and social networking website founded by David Karp in 2007 and currently owned by American company Automattic. The service allows users to post multimedia and other content to a short-form blog.Tumblr is an alternative free blogging site that currently hosts 476 million different blogs, and it was just recently purchased by Automatic.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
