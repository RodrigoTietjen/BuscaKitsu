import styled from 'styled-components'

export const TableStyle = styled.div`
    display: flex;
    flex-direction: column;

    ${props => props.columns.map((c, idx) => {
        return `.cell:nth-child(${idx + 1}) {
            width: ${c.width};
        }`
    })}

    .cell:not(:last-child) {
        padding-right: 10px;
    }

    .cell {
        display: flex;
    }

    .row {
        display: flex;
        cursor: pinter;
    }

    .query {
        display: flex;
        flex-direction: column;
        padding-bottom: 34px;

        label {
            font-size: 16px;
            opacity: 100%;
            font-family: 'Roboto-Regular';
            color: #D42026;
        }

        input {
            border: 1px solid #A5A5A5;
            border-radius: 4px;
            height: 27px !important;
            line-height: 31px;
            width: 400px;
        }
    }

    .headers {
        span {
            width: 100%;
            color: white;
            font-family: Roboto-Regular;
            background-color: red;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid transparent;
        }
    }

    .content {
        .character {
            position: relative;
            
            .background-hover {
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 2;
                &:hover {
                    background-color: #D42026;
                    opacity: 10%;
                    cursor: pointer;
                }
            }
    
            img {
                height: 58px;
                width: 58px;
                border-radius: 100%;
                align-self: center;
                padding-right: 10px;
                padding-left: 10px;
            }
            
            .row {
                position: relative;
                height: 112px;
            }
            
            .cell {
                padding-top: 20px;
                padding-bottom: 20px;

                &:first-child {
                    span {
                        align-self: center;
                        height: min-content;
                        padding-left: 15px;
                    }
                }
            }
    
            span {
                font-size: 21px;
                font-family: Roboto-Regular;
                color:  #4E4E4E;
                overflow: hidden;
            }
    
            .line {
                position: absolute;
                width: 100%;
                border-bottom: 1px solid #D42026;
            }
        }
    }

    .paginator {
        display: flex;
        align-self: center;
        padding-top: 16px;
        padding-bottom: 16px;
        .icon {
            cursor: pointer;
            margin: 12px;
            display: inline-block;
            vertical-align: middle;
            width: 0; 
            height: 0;

            &.left {
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-right: 13px solid #D42026;
            }

            &.right {
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-left: 13px solid #D42026;
            }

            &.disabled {
                opacity: 35%;
            }
          }

        .button-div {
            display: flex;

            &:not(:last-of-type) {
                padding-right: 20px;
            }

            .page-button {
                cursor: pointer;
                align-self: center;
                color: #D42026;
                font-size: 21px;
                font-family: Roboto-Regular;
                border-radius: 100%;
                border: 1px solid;
                height: 32px;
                width: 32px;
                padding: 0px;
    
                &.selected {
                    color: #FFFFFF;
                    background-color:#D42026 !important;
                }
            }
        }
    }
`