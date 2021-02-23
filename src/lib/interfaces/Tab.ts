import { BoilerplatePart} from '~/interfaces/Boilerplate'

export interface Tab {
	key: string
	title: string
}


export interface TabBoilerplate extends BoilerplatePart {
	class: string,
	children: {
		nav: {
            class: string,
            children: {
                navList: {
                    class: string,
                    children: {
                        navListItem: {
                            class: string,
                            children: {
                                navButton: {
                                    class: string
                                }
                            }
                        }
                    }
                }
            }
        },
        panels: {
            class: string,
            children: {
                panel: {
                    class: string
                }
            }
        }
	}
}