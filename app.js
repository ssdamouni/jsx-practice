const App = () => {
    return  <div>
        <FirstComponent />
        <NamedComponent name="Steven" />
        <Tweet username="username" name="name" date="July 8th 1991" message="this is my first tweet" />
        <Tweet username="ssdamouni" name="steven" date="June 26 2021" message="I think i might go get a soda" />
        <Tweet username="coolbuy89" name="Chad Michaels" date="August 19 2020" message="I don't need no sympathy" />
        <Person name="Chris" age={29} hobbies={["cello", "watching tv", "drinking beer"]} />
        <Person name="Laure" age={34} hobbies={["playing piano", "gardening", "eating cheese"]} />
        <Person name="Sarah" age={29} hobbies={["nagging", "baking", "documenting failure"]} />
        <Person name="Elizabeth" age={44} hobbies={["technology", "Minecraft", "eating chocolate"]}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))