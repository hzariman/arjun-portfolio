import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedProject: null,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      showModal: true,
      selectedProject: project,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      selectedProject: null,
    });
  };

  render() {
    let { resumeData } = this.props;
    let { showModal, selectedProject } = this.state;

    return (
      <section id="projects" className="block pt-[90px] pb-[72px] px-[15%] overflow-hidden bg-black">
        <div className="TODO flex flex-col mx-auto pt-[3%] borderAnimate">
          <div className="block w-[96%] max-w-[1020px] my-0 mx-auto">
            <h1 className="text-transform: uppercase font-AFont font-bold">
              <span className="border-b-[3px] border-solid border-AOrange">Projects</span>
            </h1>
          </div>
          <div className="ag-format-container">
            <div className="ag-courses_box">
              {resumeData.projects && resumeData.projects.map((project, index) => (
                <div
                  className="ag-courses_item"
                  key={index}
                  id={`project-${index}`}  // Set the id dynamically
                >
                  <a
                    // href={`#project-${index}`}  // Link to the specific project card location
                    href="#projects"
                    className="ag-courses-item_link smoothscroll"
                    onClick={() => this.handleProjectClick(project)}
                  >
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">{project.ProjectName}</div>
                    <div className="ag-courses-item_date-box">
                      Start: <span className="ag-courses-item_date">{project.StartDate}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        {showModal && selectedProject && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal-content bg-white p-8 rounded-lg max-w-lg w-full relative">
              <button
                className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={this.handleCloseModal}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.ProjectName}</h2>

              {/* Carousel */}
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                className="mb-4"
              >
                {selectedProject.images && selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Slide ${index}`} className="rounded-lg" />
                  </div>
                ))}
              </Carousel>

              {/* JD Text */}
              <p className="text-gray-700">{selectedProject.JD}</p>
              <button
                className="bg-AOrange text-white px-4 py-2 rounded mt-4"
                onClick={this.handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    );
  }
}
