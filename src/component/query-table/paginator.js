import React from 'react';
export class Paginator extends React.Component{

  constructor(props) {
    super(props);
  }

  handlePageClick = (e) => {
    this.props.onPageSelect(parseInt(e.target.textContent));
  }

  getButtons = (qtd) => {
    var buttons = [];
    for(var i = 0; i < qtd; i++) {
      const button = (
        <div className="button-div" key={`btn-div-${i}`}>
          <button
            key={`btn-${i}`}
            id={`btn-${i}`}
            onClick={this.handlePageClick}
            className={`page-button ${i === 0 ? 'selected' : ''}`}
          >
            {i + this.props.currentPage}
          </button>
        </div>
      )
      buttons.push(button);
    }
    return buttons;
  }

  render() {
    const isMobile = window.screen.width <= 860;
    const pageQtd = isMobile ? 3 : 6;
    return (
      <div className="paginator">
        <i
          className={`icon left ${this.props.currentPage == 1 ? 'disabled' : ''}`}
          onClick={() => this.props.onPageSelect(this.props.currentPage - 1)}
        />
        {this.getButtons(pageQtd)}
        <i 
          className="icon right"
          onClick={() => this.props.onPageSelect(this.props.currentPage + 1)}
          />
      </div>
    );
  }
}