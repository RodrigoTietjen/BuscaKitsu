import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TableStyle } from './query-table.style';
import { Paginator } from './paginator';

class QueryTable extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    handleKeyDown = (e) => {
        e.key === 'Enter' && this.props.config.query.onQueryConfirm(e.target.value, this.props.currentPage);
    }

    handlePageSelect = (page) => {
      this.props.config.query.onQueryConfirm(this.inputRef.current.value, parseInt(page));
    }

    render() {
      const {
        config,
        data,
        onCharacterSelect
      } = this.props;

      return (
        <TableStyle
          columns={this.props.config.columns}
        >
          {config.query.queryable && (
            <div className="query">
              <label>{config.query.queryLabel}</label>
              <input
                onKeyDown={this.handleKeyDown}
                ref={this.inputRef}
              />
            </div>
          )}
          <div className="row headers">
            {config.columns.map((col, idx) => (
              <div className="cell" key={`td-${idx}`}>
                <span>{col.label}</span>
              </div>
              )
            )}
          </div>
          <div className="content">
            {data.map(character => {
              return (
                <div key={`character-${character.malId}`} className="character" onClick={() => onCharacterSelect(character)}>
                  <div className="background-hover"/>
                  <div className="row">
                    {config.columns.map(col => {
                      if(col.customCellRender) {
                        return col.customCellRender(character);
                      }
                      return (
                      <div className="cell" key={`description-${character.malId}`}>
                        <span>{character[col.field].split('.')[0]}</span>
                      </div>);
                    })}
                  </div>
                  <span className="line"/>
                </div>
              )
            })}
          </div>

          <Paginator
            currentPage={this.props.currentPage}
            onPageSelect={this.handlePageSelect}
          />
        </TableStyle>
      );
  }
}

export default QueryTable;

QueryTable.defaultProps = {
    currentPage: 1,
    data: [],
    config: {
        columns: [],
        query: { 
            onQueryConfirm: () => {}
        }
    }
}

QueryTable.propTypes = {
    config: PropTypes.shape({
        columns: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                field: PropTypes.string,
                width: PropTypes.string,
                customCellRender: PropTypes.func
            })
        ),
        query: PropTypes.shape({
            queryable: PropTypes.bool,
            queryLabel: PropTypes.string,
            onQueryConfirm: PropTypes.func
        })
    }),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number
          })
    ),
    onCharacterSelect: PropTypes.func
};