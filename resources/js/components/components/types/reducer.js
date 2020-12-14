const { initial } = require("lodash");

// In original db programmer add a column "parent_id" what it doesn't nessesery.
// So I remove that but I left the original id

const INITIAL_TYPES = {
    list: [
        {
            id: 1,
            name: 'komputer',
            child: [
                {
                    id: 2,
                    name: 'Komputer stacjonarny'
                },
                {
                    id: 3,
                    name: 'Laptop'
                },
                {
                    id: 4,
                    name: 'Notebook'
                },
                {
                    id: 5,
                    name: 'Palmtop'
                },
                {
                    id: 37,
                    name: 'Serwer'
                }
            ]
        },
        {
            id: 6,
            name: 'drukarki',
            child: [
                {
                    id: 7,
                    name: 'Drukarka laserowa'
                },
                {
                    id: 8,
                    name: 'Drukarka atramentowa'
                },
                {
                    id: 9,
                    name: 'Drukarka igłowa'
                },
                {
                    id: 10,
                    name: 'Drukarka termiczna'
                },
                {
                    id: 39,
                    name: 'Urządzenie wielofunkcyjne'
                }
            ]
        },
        {
            id: 11,
            name: 'Drukarki',
            child: [
                {
                    id: 12,
                    name: 'Monitor CRT'
                },
                {
                    id: 13,
                    name: 'Monitor LCD'
                },
            ]
        },
        {
            id: 14,
            name: 'Elementy sieciowe',
            child: [
                {
                    id: 15,
                    name: 'Hub'
                },
                {
                    id: 16,
                    name: 'Switch'
                },
                {
                    id: 17,
                    name: 'Router'
                },
                {
                    id: 30,
                    name: 'Transceiver'
                },
                {
                    id: 31,
                    name: 'Tester kabli'
                },
                {
                    id: 41,
                    name: 'Serwer terminali'
                },
                {
                    id: 43,
                    name: 'Konwerter'
                },
                {
                    id: 44,
                    name: 'Elementy sieci'
                }
            ]
        },
        {
            id: 18,
            name: 'Czytniki mikroprocesorowe',
            child: [
                {
                    id: 19,
                    name: 'Wewnętrzny czytnik kart mikroprocesorowych'
                },
                {
                    id: 20,
                    name: 'Zewnętrzny czytnik kart mikroprocesorowych'
                },
            ]
        },
        {
            id: 21,
            name: 'Skaner',
            child: [
                {
                    id: 22,
                    name: 'Skaner stacjonarny'
                },
                {
                    id: 23,
                    name: 'Skaner ręczny'
                },
            ]
        },
        {
            id: 24,
            name: 'Projektor'
        },
        {
            id: 25,
            name: 'Terminal',
            child: [
                {
                    id: 45,
                    name: 'Terminal przewoźny'
                },
                {
                    id: 46,
                    name: 'Terminal noszony'
                }
            ]
        },
        {
            id: 26,
            name: 'Komponenty komputerowe',
            child: [
                {
                    id: 27,
                    name: 'UPS'
                },
                {
                    id: 28,
                    name: 'Klawiatura'
                },
                {
                    id: 29,
                    name: 'Mysz'
                },
                {
                    id: 40,
                    name: 'Napęd CD/DVD/RW'
                },
                {
                    id: 42,
                    name: 'Kolumny, głośniki, słuchawki'
                }
            ]
        },
        {
            id: 32,
            name: 'Oprogramowanie',
            child: [
                {
                    id: 33,
                    name: 'Systemy operacyjne'
                },
                {
                    id: 34,
                    name: 'Branżowe\narzędziowe'
                },
                {
                    id: 35,
                    name: 'Aplikacje biurowe'
                },
                {
                    id: 36,
                    name: 'Ochorna danych'
                },
            ]
        },
        {
            id: 38,
            name: 'Materiał'
        }

]
};

const types = (state = INITIAL_TYPES, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default types;