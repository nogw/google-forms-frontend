import React, { useContext, useEffect, useState } from 'react';

import FormCreate from '../../components/FormCreate'
import TopbarCreateForm from '../../components/TopbarCreateForm'
import Answer from '../../components/Answer'
import FormAnswers from '../../components/FormAnswers'

import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api';
import { Context } from '../../UserProvider';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClearIcon from '@material-ui/icons/Clear';

const Container = styled.div`
  height: 100vh;
  background-color: #f1f1f1;

  .top {
    width: 100%;
    min-height: 40px;
    
    .MuiTabs-root {
      background-color: #fff;
      height: 40px;
      box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1);
      position: relative;
      z-index: 996;

      .MuiTab-root {
        font-size: 14px;
        text-transform: lowercase;
        min-width: 120px;
        padding: 0px;
        display: flex;
        align-items: center;
      
        .MuiButtonBase-root {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;

          .MuiTouchRipple-root {
            height: 40px;
          }
        } 
      }
    }	
  }
`;

const LoadContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .content {
    max-width: 400px;
    min-width: 200px;
    margin: 16px;
    background-color: #fff;
    border-radius: 8px;

    .header {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      h1 {
        font-size: 16px;
      }

      .close {
        position: absolute;
        right: 10px;
        color: #353535;
        cursor: pointer;
        
        &:active {
          transform: scale(0.95);
          filter: brightness(0.9)
        }
      }
    }

    .body {
      padding: 20px 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      p {
        border-bottom: 1px solid #f1f1f1;
        padding-bottom: 2px;
        word-break: break-all
      }
    }

    .btn {
      padding: 6px 12px 12px;
      width: 100%;
      display: flex;
      
      button {
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        background-color: transparent;
        padding: 6px 12px 7px;
        font-size: 14px;
        color: purple;
        margin-left: auto;
        cursor: pointer;
        
        &:active {
          transform: scale(0.95);
          filter: brightness(0.9)
        }
      }
    }
  }
`;

const Modal: React.FC<any> = ({ show, setShow }) => {
  const history: any = useHistory()
  const local: string = `https://forms-react-clone.herokuapp.com${history.location.pathname}`
  const [copy, setCopy] = useState(false)

  useEffect(() => {
    setCopy(false)
  }, [show])

  function fallbackCopyTextToClipboard() {
    var textArea = document.createElement("textarea");
    textArea.value = local;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      successful ? setCopy(true) : setCopy(false)
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }

  if (!show) {
    return null
  }
  return (  
    <ModalContainer>
      <div className="content">
        <div className="header">
          <h1>copy your link</h1>
          <ClearIcon className="close" onClick={() => setShow(!show)}/>
        </div>
        <div className="body">
          <p>{local}</p>
        </div>
        <div className="btn">
          <button onClick={() => fallbackCopyTextToClipboard()}>{copy ? "your link was copied ;)" : "copy"}</button>
        </div>
      </div>
    </ModalContainer>
  );
}

interface ParamTypes {
  id: string
}

const New: React.FC = () => {
  const [errors, setErrors] = useState("")  
  const id = useParams<ParamTypes>()
  const [user, setUser] = useContext(Context)
  const [answers, setAnswers] = useState([])
  const [load, setLoad] = useState(true)  
  const [confirm, setConfirm] = useState("")
  const [show, setShow] = useState(false)

  const [options, setOptions] = useState<any>({
    title: "",
    description: "",
    cards: []
  })

  useEffect(() => {
    const getForm = () => {
      api.get('/form/getForm', {
        params: {
          idForm: id.id
        }
      }).then((res) => {
        setOptions(res.data.result)
        setLoad(false)
      }).catch((err) => {
        console.log(err)
      })
    }

    getForm()
  }, [])

  useEffect(() => {
    const getAnswers = () => {
      api.get('/answer/getAnswer', {
        params: {
          idForm: id.id
        }
      }).then((res: any) => {
        console.log(res.data.result)
        setAnswers(res.data.result)
      }).catch((err: any) => {
        console.log(err)
      })
    }

    getAnswers()
  }, [])

  const updateForm = async () => {
    await api.post('/form/update', {
      _id: options._id,
      user_id: options.user_id,
      title: options.title,
      description: options.description,
      cards: options.cards
    })
    .then((sucess) => {
      console.log(sucess.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const verifyErrors = () => {
    if ( options.title.length < 3) {
      return "the title must be at least 3 characters"
    }

    if ( options.description.length < 3) {
      return "the description must be at least 3 characters"
    }

    for( var c = 0 ; c < options.cards.length ; c++) {
      if (options.cards[c].question.length < 3) {
        return `all cards must have a question of at least 3 characters ${c}`
      } 

      if (options.cards[c].type == "choice") {
        for( var j = 0 ; j < options.cards[c].questions.length ; j++) {
          if (options.cards[c].questions[j].option.length < 3) {
            return "in choice cards, put at least one option of at least 3 characters"
          }
        }
      }
    }

    return ""
  }
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    load ? (
      <LoadContainer>
        <CircularProgress/>
      </LoadContainer>
    ) : (
      <Container>
        <Modal show={show} setShow={setShow}/>
        {
          options.user_id == user.id ? (
            <>
              <TopbarCreateForm 
                errors={errors} 
                setErrors={setErrors}
                titleForm={options.title} 
                updateForm={updateForm}
                verifyErrors={verifyErrors}
                confirm={confirm}
                setConfirm={setConfirm}
                setShow={setShow}
              />
              
              <div className="top">
                <Tabs
                  value={value} 
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="questions" />
                  <Tab label="answers" />
                </Tabs>
              </div>
              {
                value == 0 ? (
                  <FormCreate
                    options={options} 
                    setOptions={setOptions}
                  />
                ) : (
                  <FormAnswers
                    answers={answers}
                    setAnswers={setAnswers}
                  />
                )
              }
            </>
          ) : (
            <Answer options={options} setOptions={setOptions}/>
          )
        }  
      </Container>
    )
  );
}

export default New;