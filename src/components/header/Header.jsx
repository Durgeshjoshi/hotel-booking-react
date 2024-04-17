import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
const Header = () => {

const [openDate, setOpenDate] = useState(false);  
const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOption, setOpenOption] = useState(false);  
  const [option, setOption] = useState([
    {
     adult:1,
     children:0,
     room:1
    }
  ]);
  return (
    <div className='header'>
        <div className="container">
        <div className="header-list">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>  
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>  
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
            </div>  
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>  
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>  
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius. </h1>
        <p className="headerDesc">
            Get rewarded for your travels - unlock instant savings of 10% of  with a free DJvooking account.
        </p>
        <button className="headerbtn">Sing In / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input type="text" placeholder='whre are you going?' className="headerSearchInput" />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
                <span onClick={() => { setOpenDate(!openDate)
                }}className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} To ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
               { openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${option.adult} Adults ${option.Children} Children ${option.room} room`}</span>
                {openOption && <div className="option">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                            <button className="optionCounterBtn">-</button>
                            <span className="optionCounterNumber"></span>
                            <button className="optionCounterBtn">+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Childern</span>
                        <div className="optionCounter">
                            <button className="optionCounterBtn">-</button>
                            <span className="optionCounterNumber"></span>
                            <button className="optionCounterBtn">+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                            <button className="optionCounterBtn">-</button>
                            <span className="optionCounterNumber"></span>
                            <button className="optionCounterBtn">+</button>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="headerSearchItem">
                <button className='headerbtn'>Search</button>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Header