import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="research" className="block pt-[90px] pb-[72px] px-[15%] overflow-hidden bg-black">
        <div className="TODO flex flex-col mx-auto pt-[3%] borderAnimate">
          <div className="block w-[96%] max-w-[1020px] my-0 mx-auto">
            <h1 className="text-transform: uppercase font-AFont font-bold">
              <span className="border-b-[3px] border-solid border-AOrange">Projects</span>
            </h1>
          </div>
          <div className="ag-format-container">
            <div className="ag-courses_box">
              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">
                    UI/Web &amp; Graph design for teenagers 11-17&#160;years old
                  </div>
                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">UX/UI Web-Design&#160;+ Mobile Design</div>
                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">
                    Annual package "Product+UX/UI+Graph designer&#160;2022"
                  </div>
                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">Graphic Design</div>
                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">Motion Design</div>
                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">30.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">
                    Front-end development&#160;+ jQuery&#160;+ CMS
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">Digital Marketing</div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">Interior Design</div>
                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">31.10.2022</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
