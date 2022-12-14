## plant.bot Front End ## 
### Features
#### To do
A core feature of the application is the data-visualization over time. View system design on the FigJam board, but front-end will be fetching data from an RDS server with at least 3 months (hopefully 6) worth of data, then displaying that in the graph below the 3D model.
- [ ] Setup RDS DB
- [ ] Fetch and parse data by different types
- [ ] Find relevant graph visualizer package on npm
- [ ] Overlay trend graphs organized by color
- [ ] Setup "All Time" vs "Prev 4 hours" graphs
- [ ] Error handling

#### Console
If I can get the console from the Arduino it could be used to display both the current date the Arduino is reading and/or the request status. 
- [ ] Assess microcontroller console

### Known bugs
#### Misc
- [ ] Proxy error: Could not proxy request to `/favicon.ico`
#### 3D Model
Likely fixes in `<model-viewer>` component, exists in `<MonsteraPlant>`
- [ ] Can be scrolled to increase / decrease size
- [ ] Overflow enforces min viewport width, unusual side-scroll behavior

#### Data fetching
Bugs that occur when fetching data from server. Current development fetches data from `json-server` package, but will (hopefully) fetch from the Arduino directly.
- [ ] No handling for loading data
- [ ] No handling for missing data