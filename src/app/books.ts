export interface booksInfo {
    id: number;
    title: string;
    description: string;
    image: string;
    pdf: string;
}

export const books: booksInfo[] = [
    { id: 1, title: "Around the World in Eighty Days", description: "Taking up a challenge from his whist partners, a mysterious English gentleman named Phileas Fogg wagers half his fortune and abandons his quiet domestic routine to undertake a daring feat: to circle the globe in a mere 80 days, an achievement unheard of in the Victorian world.", image: "/assets/Around.jpg", pdf: "/assets/AroundTheWorldInEightyDays.pdf" },
    { id: 2, title: "From the Earth to the Moon", description: "At the close of the Civil War, as three artillerymen resolve to build a gun big enough to propel a manned rocket to the moon. Enlivened by broad satire, this rollicking tale recounts the launch of three astronauts from a Florida peninsula and their return to Earth in a splash landing.", image: "/assets/From.jpg", pdf: "/assets/FromTheEarthToTheMoon.pdf" },
    { id: 3, title: "The Mysterious Island", description: "Five Civil War prisoners escape their Confederate jail by hijacking a hot-air balloon. Blown halfway across the world and stranded on a remote island, the fugitives' survival depends upon their ability to build a sustainable environment while withstanding pirate attacks, volcanic eruptions, and other challenges.", image: "/assets/The.jpg", pdf: "assets/TheMysteriousIsland.pdf" },
    { id: 4, title: "Twenty Thousand Leagues Under the Sea", description: "Weaving amazing scientific achievements with simple, everyday occurrences, this memorable tale brims with detailed descriptions of a futuristic vessel and bizarre scenes of life on the ocean's bottom. On-board travelers view Red Sea coral, wrecks of a historic naval battle, Antarctic ice shelves, and the fictional Atlantis.", image: "/assets/Twenty.jpg", pdf: "/assets/TwentyThousandLeaguesUnderTheSea.pdf" },
    { id: 5, title: "Journey to the Center of the Earth", description: "An adventurous geology professor chances upon a manuscript in which a 16th-century explorer claims to have found a route to the earth's core. Professor Lidenbrock can't resist the opportunity to investigate, and with his nephew Axel, he sets off across Iceland in the company of Hans Bjelke, a native guide. ", image: "/assets/Journey.jpg", pdf: "/assets/AJourneyToTheCentreOfTheEarth.pdf" },
]