import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../UserProvider';
import { Container, Header, FormContainer } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import dayjs from 'dayjs'

const Form: React.FC<any> = ({ title, id, data }) => {
  return (
    <Link to={`/f/${id}`}>
      <FormContainer>
        <div className="gray">
          <img src="https://riu.cead.unb.br/images/google_forms.png?1591378945" alt="forms"/>
        </div>
        <div className="content">
          <h1 className="title">{title}</h1>
          <div className="infos">
            <ListAltRoundedIcon className="list"/>
            <p>Open {data}</p>
            <MoreVertOutlinedIcon className="dots"/>
          </div>
        </div>
      </FormContainer>
    </Link>
  )
}

const Recents: React.FC<any> = ({ search, setSearch }) => {
  const [recents, setRecents] = useState([])
  const [user, setUser] = useContext(Context)

  const recentsFiltered = recents.filter((recent: any) => 
    recent.title.toLowerCase().includes(search.toLowerCase())  
  )

  useEffect(() => {
    const getForms = () => {
      api.get('/form/getMyForms', {
        params: {
          id: user.id
        }
      }).then((res) => {
        setRecents(res.data.results)
      })
    }

    getForms()
  }, [])

  return (
    <Container>
      <Header>
        <h1>Recent forms</h1>
        <div className="right">
          <div className="button">
            <button>
              <ViewListOutlinedIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
          <div className="button">
            <button>
              <SortByAlphaIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
          <div className="button">
            <button>
              <FolderOpenOutlinedIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
        </div>
      </Header>
      {
        recentsFiltered.length > 0 ? (
          <div className="recentForms">
            {
              recentsFiltered.map((recent: any) => {
                return (
                  <Form key={recent._id} id={recent._id} data={recent.data} title={recent.title} />
                )
              })
            }
          </div>
        ) : (
          <div className="noForms">
            <h1>No forms yet</h1>
            <p>Click + to create a new form.</p>
          </div>
        )
      }
    </Container>
  );
}

export default Recents;