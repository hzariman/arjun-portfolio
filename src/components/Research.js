import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="research" className='block pt-[90px] pb-[72px] px-[15%] overflow-hidden'>
        <div className='TODO flex flex-col mx-auto pt-[3%] bg-white borderAnimate'>
          <div className="block w-[96%] max-w-[1020px] my-0 mx-auto text-center md:text-left">
            <h1 className='text-transform: uppercase font-AFont font-bold'>
              <span className='border-b-[3px] border-solid border-AOrange'>Research Experience</span>
            </h1>
          </div>
          <div className="block mb-[48px] pb-[48px] w-[96%] max-w-[1020px] my-0 mx-auto">
            {resumeData.research && resumeData.research.map((item, i) => {
              return (
                <div className="flex flex-col md:flex-row items-center md:items-start pb-[25px] pt-[50px] px-0 w-full" key={i}>
                  <div className="columns relative px-[20px] py-0 w-full md:w-auto">
                    <img src={`${item.Image}`} className="w-[150px] aspect-auto mx-auto md:mx-0" alt='images/UCSD-Emblem.png'/> 
                  </div> 
                  <div className="columns main block relative px-[20px] py-0 min-h-[1px] w-full md:w-auto text-center md:text-left">
                    <div className="twelve rows block w-full">
                      <h3 className='font-semibold text-xl underline'>{item.Title}</h3>
                      <p className="info">
                        {item.Mentor}
                        <span className="mx-1">|</span> <em className="location">{item.Location}</em>
                        <span className="mobile-date">
                          <span className="mx-1">|</span> <em className="date">{item.StartDate} - {item.EndDate}</em>
                        </span>
                      </p>
                      <ul className="work-list list-disc mt-[12px] mb-[18px]">
                        {item.Tasks.map((task, index) => (
                          <li key={index} className='text-neutral-500'>{task}</li>
                        ))}
                      </ul>
                      <div className="container skills flex flex-wrap justify-center md:justify-start gap-4">
                        {item.Skills.map((skill, index) => (
                          <div className='columns skills' key={index}>
                            <div className='skill-square bg-AOrange px-1 rounded'>{skill}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
