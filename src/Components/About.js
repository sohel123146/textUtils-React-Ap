import React from 'react'

export default function About(props) {

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? 'rgb(36 74 109)' : 'white',
        border:'1px solid',
        borderColor : props.mode === 'dark' ? 'white' : '#042743'
    }

  return (
    <div className="container">
        <h1 classNAme='my-3' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>About US</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze you text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils gives you a way to analyze your text quickly  and efficiently.Be it word count,character count.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        its free to use to analyze your text
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        The Word counter software work in a way web browers such as chrome,firefox,internet explorer,safari,opera,it suits to count characters
                        in a facebook,blog,excel,document,pdf,exssays etc
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
