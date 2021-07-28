const config = {
    light: {
        dark: false,
        backgroundColor: '#FFF',
        color: '#1C2833',
        nav: {
            backgroundColor: '#fff',
            border: '#fff',
            shadow: 'rgba(0,0,0,0.75)'
        },
        card :{
            backgroundColor: '#fff',
            borderColor: '#D6D6D6'
        },
        hover: '#EEE',
	    breakpoints: {
		    xs: '220px',
		    sm: '500px',
		    md: '680px',
		    lg: '800px',
		    xl: '980px',
		    xxl: '1200px'
	    },
	    icon: {
		    path: '../assets/icons/moon-stars-fill.svg',
		    className: 'bi bi-moon-stars-fill'
	    }
    },
    dark: {
        dark: true,
        backgroundColor: '#122638',
        color: '#FFF',
        nav: {
            backgroundColor: '#061D35',
            border: '#999',
            shadow: 'rgba(220,220,220,0.75)'
        },
        card :{
            backgroundColor: '',
            borderColor: ''
        },
        hover: '#25394E',
	    breakpoints: {
		    xs: '220px',
		    sm: '500px',
		    md: '680px',
		    lg: '800px',
		    xl: '980px',
		    xxl: '1200px'
	    },
	    icon: {
        	path: '../assets/icons/sun-fill.svg',
		    className: 'bi bi-sun-fill'
	    }
    },
	breakpoints: {
		xs: '340px',
		sm: '520px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
		xxl: '1480px'
	}
}

export default config
