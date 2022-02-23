'use strict';

const arenaElement = document.querySelector('.arena');
const boardElement = document.querySelector('.board__selected-seat');

const generateArrayNumbers = (from, to) => {
    const newArr = [];

    for (let index = from; index <= to; index += 1) {
        newArr.push(index);
    }

    return newArr;
}

const createSector = () => {

    return generateArrayNumbers(1, 3).map((position) => {
        const sectorElement = document.createElement('div');
        sectorElement.classList.add('sector');
        sectorElement.dataset.sector = position;
        createSectorLine(sectorElement);
        arenaElement.append(sectorElement);
    });
}

const createSectorLine = (sector) => {

    generateArrayNumbers(1, 10).map((position) => {
        const line = document.createElement('div');
        line.classList.add('sector__line');
        line.dataset.sectorLine = position;
        createSectorSeat(line);
        sector.append(line);
    });
}

const createSectorSeat = (sectorLine) => {

    generateArrayNumbers(1, 10).map((position) => {
        const seat = document.createElement('div');
        seat.classList.add('sector__seat');
        seat.dataset.sectorSeat = position;
        seat.addEventListener('click', (e) => {
            const seatPosition = e.target.dataset.sectorSeat;
            const linePosition = e.target.closest('.sector__line').dataset.sectorLine;
            const sectorPosition = e.target.closest('.sector').dataset.sector;
            boardElement.textContent = `S - ${sectorPosition} L - ${linePosition} S - ${seatPosition}`;
        });
        sectorLine.append(seat);
    });
}

const renderArena = () => {
    createSector();
}

createSector();