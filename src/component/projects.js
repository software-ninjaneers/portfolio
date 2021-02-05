import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Accordion,
	Card,
	ListGroupItem,
	ListGroup,
	Button,
} from "react-bootstrap";
import "../style/projects.css";

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		function fetchData() {
			// You can await here
			axios
				.get("/projectsApi/projects")
				.then((response) => {
					// ...
					setProjects(response.data.data);
				})
				.catch((error) => {
					throw error;
				});
		}
		fetchData();
	}, [projects]); // Or [] if effect doesn't need props or state

	const iterate = (array) => {
		var string = "";
		array.forEach((element, i) => {
			i < array.length - 1 ? (string += element + " - ") : (string += element);
		});
		return string;
	};
	return (
		<div className="backgroundImg2">
			<div className="card-group">
				{projects.map((element, i) => {
					return (
						<div key={i} className="col-sm-3 mt-5 ml-5">
							<Accordion defaultActiveKey="0">
								{/* //TESTING */}
								<Card style={{ width: "20rem" }}>
									<Card.Img
										variant="top"
										src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGCAYGBgYGR8YHhodIB0ZHRodGh0bHSggHRolHRodITEhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUvLy8tLS0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAgMFBgcAAf/EAE0QAAECBAMFBQQGBwYFAgcBAAECEQADITEEEkEFIlFhcRMygZGhBrHB8AcUI0Ky0VJicpKi4fEkM0NzgsIVU2Oz0jXiJTREVJOjwxf/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACoRAAICAgIABQMEAwAAAAAAAAABAhEDIRIxIjJBUWEEE4EzQkNxFCOh/9oADAMBAAIRAxEAPwC+yAUKQVK3CgJb9Yq3fE2h7Ed4F/usR+0oD/aYG2kkBcmj/aBRJsMqVV5HXwgpyF5Woyam7uT8PWOb4NTphLEitz1o3xMB7WnJ7NeZZCXObKA5bKGHKsHC4IFa/wAx0/KI5CZhXMSEAoB3Tl4lGcbxY624eal0ND6JwJorKBNIL/sEgF+dYdxSVFB7M7wyk6OxBY8zbxgXF4PtE4hILqVMzVBIBTkKRwsB5wrZO0u2QoqASt8pQ7FwosehYU5awfAfIZLnB3OpUz0oKvews8M9jmyqqN12zFmKk5n8qdY9xqFAvQuogPYAhNPMP4QSibmFj3W04saPbWH3oXyD4maAlQUFPlDgDkXy+4awJLXlKAnMBnAbWpD5qNQaflB6Eqck5RRiOFd2nwHGH14c72VnYgaVL69G84TTex2kQ2Owqp00JBKkpylRtUEv/TUiJ1SN0hLhqCnRutoEwaVJQStkutOWn61LeHSJPLpS5Pz7ocF6ik/QanMASafJ5R7Jr8/z5wnHyCtDUOter052jzCzFEJJF3r5AP1Lxd7omtDpNW5e/wDoI9loYM7195p5QwuZvbqXoQQS2qX46E05QQ4VwKS19bM0OxA80slxo4A1J0A8oVhkEd5Tu3ClB8ffC50kA59RbUVbSFZCwYjTSmnwhDG0uVGgytTXXpSnxhubLIBb9J248X84IUguPfx5N82hSgOGo86CGIiZcpw1wVEGtqtToPRoBKFBRSrKEFFAzndIO9ZyQ/rwiaYOoUJCgTU1e3Q0bwiOm4dHaAqRUPmU13chqVYk9HjKS0aRYJjcOSsrSoI7oqAXSKnSlne94XJlLMsgKCiRRRHMKBNGaptQBoJyJ1Q5W2bwFCemkESJbE5nbuhzRQYG3iz8BCS2OyICqgE5VElFBmdIrqGuq0N4nBlplcwzAqQVOAS1hXKbcul4mMRhZagqiVHR68dODebQPNQFiYmjsLkNbhQ0qNIXH0HZGYOSkZUCWQcoJNGU9aMXo7MWhfZsQLkOKXuKPDuMlgqyZXPZu4oxSS9jetupo0LmhllSClwrKMwcB0kh61Dtro0ZuJSZ6jAkqUFBWih1AoA3MA+MebSRLtuJyA5d8D7QtRjcEEuOJ4wbiklTIDHMHatwXpVoYxeFS5SQQksBwSS4CmdqEX5xaikqJ5WAbNTMmq3iEsQQFJBGVjQMxUkEvWoMGbPSy0vkdBVKJSGfVIq92Gt+FIaTgwEZFErc0Cg5ZBKnD0S9OBf06YgBc0AnNmQstQ97MQSzlntz5RS0J7DtoSlKBylwxFGYGhdWpIKWozPrFf2VLKz2yw6Soh0ud41cJDm5cvBm2ixly5ZaWVHNlfVSSXy6GvGJXFBLJagCgzNyFm5keMDqT/oS0v7GZCc6UqLuQHoR6EgjpHQ7KDA3G8rVvvGOiybF9gVFIegJ/BletKE68YemJIUlQLuRTjRZ+PpCU6qKXYqbSgUKAHVk+PjD01BPJlP5fAt5GAYwFDPKTWylDSzAuP8AXbpaHSgENUD3V4+EeTAO1lkiyFAE6ZlSwB4/COwpcCrfdbRwoggdGMADaMqc6iGCVqUSLncB9x9BFb2hJyzyUHfEsTMtC5JJGrPpzEWQF8wKdwlQUXc5iyLaAA68I8lbOkmY4DzAE5t56VZwaNSIkrKi6G8Li5eIOVi6S7c7gv0MEpcKbK4Eup5k0Hk5/rEZMkCTPQRxzGlgQxAbWgfrEhi8Yjs8wc5pbjper2MNP3Br2FzVJUSBbvPZyKNblDaxlVQEgnMT1FwOIb0EGSykIfS/mBT1hsILgUIIY8Nb6tDYkOpw4SkJDkJKWzEk34+MOlgpPN69XMerdh+0mwPEen5QtKgSG4kDmziLogEVM3uL3Z7NQMeZgtCQ3DX4k9Xj1gRxBHnrHTwcpygE1YGgeGlQNjS0gFHJRFD+qfyEOrHL4R5iBuAnQhR8CCfSHVlmrq0MQlnDHxhKfnpxhST5P8T/ACjxAvyV6X+MMBrFoWQMhAU4Nbcx4w0nDd5you1zw4NYPBr2jxSYlx9R2DGQkBW6BStLtaB56iFj9EtUCrkKDP68aQbldzrbw+ffCZksGvBi/wA8olr2GmAzUWe5NxpQAerCBkhKVgqU9SAODgqYAXplqeUSSia2oaV99KQFNklakgEOleZX7IcU5kgcKHUiJZSFzJYJUSQCPvPQBy1eLeFRA2HXnKiBUumvLUXFvOCghK0Og0LVFmtqPDwhpOGSJ5UQc3Z5TewIIA89OEJgR5KTlq6koIOrNxJN6awqUtKsyEkDdQdCzk6F604agwXh5YUz3S7liAcwLBje/haPMLhXlpIckCx4gmm6RSpD1trrKRTY5PBzyiHIYppd2PHp6Q3hT9m5SQsJUliMrsqjZuYDH9YRIlAygs7EN7qcbmGpMrcUmoOZR6El38y/jF1siwLESVZwoMGIA8cwLtUh7HnDOKmpSpSHZZkHe0FWqaPXTRtIXjcTNScgo5TlmO5UToElLNe5N4i8XhcQFS5c0JWnMshQAF8xItQ6/wBImbroqKvsJ2TI768oWSsAKYEhxlJZqFmc6iD5qBlVmoGqeLMVFhR/WhiDw058uUkLN1AgFq/PCkGpxS5ic6mKqOE0DM7C5fXm/hEQyKqKlB3YpdCyWy6OVD00jo5BLB1F2jofIVEmiU5znUKAY6KU4PIsB0rDqk1UHDlRAa4OTXwr0IjkySE5XcZQmHUykjOdCoqJ5sB7g0amYyZgTlUScmVAAPEqAB9Q/SOwmCyBjX7VS0nhmKj8SPGFYrDFSUoAaqSOWUg/DSDUA8KMDxOsNICJ2XIYz1uMhmLccCCX+MEYbAJEwzMxBU2v+ryq0KkzETHUAQE5kqBDOS2ZuIpD8xOUFQrvVBszaDSjQklQ22Q+KwSe0lu/cNdC7Xgw4LtEA5i+QDTVItxrXxghbmWtSgCWcBqZb+Dgaw7h52ZOYAgHKADcWd+ESop/kbkxvsAlICdCBwsw01Z7QlKA4pehNQdSbR6SXID8/wA241h9CjQNX4Q9MWz1CGDA2IuP1vn0hwBhxqT5vCk8eg9Y9IqDXX5MaECSOVNPKFNVo9SL9aRzV84YCVgFDcQ0ey6gFrgGFL0pq3nHJYMPKGIYTL3lC4LH4H8IhaEVJd7GniIcPefiPcf5x61fCAYl4SkVPzT5eFqFuvwMcRaABI0hmckEEa8Oh/MQufMy1PH5tyhKFgswpXTp8+ES/YaGL596jNyTevFy410hDJc729ctwUSAejj0h5aASKXrblCMThMwpQgAAuX6O8QUB4hOWbLSXIKV1oBxYsOH4RD6P7y7MlyK1BzanoD/AKYVKwAdyHJXmJfXKA48njpiSFuTdLtYljR2HO3PlCr1AB7AlayFE5lBQLAMB921RQl+JfWJDBSiE6d48eJ48jHmWl2BFWLUahL86XghDVABu55mhYcYIoGxmaDlIBGUUdjRvyu/JuccmXmBTmcMHNzXnYgiHJ8xkskXDXdhz1fSBMTKKgncBCWBSanhWnD4w5OgSsCXhTm3lB3ABFAkCgKQSRRw9avBk5CJqgRvFILKBDB+Wto7Dy5apapZITS3dbm3CCdngZaVrX58YUV/0GyC2dsnLMykMAgEKBLmqqNYaescvBJlDs3+6aFzSutj41iUkTkkInVBUyONCS3qXhM/DkqJqc3pYAeXxiHBVork72RGUClqCjWpHR2Lx3ZrKGs1yRoDbKeMdGLjI0tEyuc02WAzLCiacMre+Hyo1HHO/gQ3vgfCLStaF5Tm7IEcgogqHWg+TBo1pUB/An30jrRgwabPUhT3KghKUktvOp3oWFQ56R2HlKC15y7JQQLBwFOw6/CKFtXEzVzJh7RRyzlgDMaBMxYSANGSBaE7MdZVn5M7nxr1jF5aNlisv+y5uZC3Ybyi4r1p1fzhC8RuOoF1ro33bGvlpFRThixAJS4NiQ9eIii7dxs/BTnE6aoIZaQpalDKSzEEtcEc2hwlzVCnDi7Nimz+1lJC33gxCXFyU+NjBKFplulS0hImUdQDDK3vjGcNjJywFrnTVZtCtRDaUdmrTrHk+YEsCoB6ByBGijXZHZt2HUFg5ZmZlVIPB9a0h0KrbX+mnP0jFMMkivGhhWE2muViUyApQTOKUkOWbPLW99QCk9TFdIVG1doA1iHhwKFKxTxheUeZAaOCeAaOf/I+DT7PyXSPXikYjZ6VIyqdjwoRzBFopCcTOk4xGEK15VLVm3jvBEtRQ/EHOFdQOEawzcvQmWKja1pPC1R4R7S7Gh11ppGbIlL/AEj51HrHn1ebfOodCYPuB9o0cTXV5j58o9+tIYZlJBOhIEZtLwswF86+NyIjfYjErmjEqWoqInZHJcslKQPRqxTnSsSx26NZViZf6aePeHF49ViEN30/vCKSsAByacT/ADh5M+WR3k/vCMvvv2L+z8lzWAeesMz5yUneUlPAkgac4xSVtaZMWlCZqwJSVJUAsj/GmqALH9FaR0EOzsy1OpRJ1Ki/rHTVmHRsCMXLJ3VpPIKB48+ULlS8rJ0FBegFACYxVUqFYvHTwglM+akoDhpigGGlD8tCcR2bDh0EzZhs4SSOgGvpD62cu/gH/mDWMy9kCcRhRNmKUpalrdRLkssgV5Bg3ACG/asrw6Ja5S1IJWEkpJSSMqyzg8vSMk98TRx1yNSKxXoHppU1j1aSMoSKZnYDTm/M+MYXiNuYpIJTiJzgf8xVvE1EW/Z+ZaAStZUSoE5i9FrFS/KKn4eyYLkaLPRuKrxIbSv58YVJlUq5LB+Nz6RjHtBtnFSZiZCJywlYcJzG+anFg5Pk+kOfX56hlXPmL45lqIPgSwhrewa9DYJmHDEANmvrp/KFJkgWAHTpGILnLzFlFxwPlBI25i0pZOImgi2+SPIuIKQqZqOH3ZCQhP8AiBLWoF1PlEmUj50pEN7PTFTMHIUS6l5FqJ1KmWpm5m1gH4RLBRUARqKg3t8vEx0DA5mHlPWUFHiQCT4mOhOLxKkqICKBvcOUdCZVBckb1BQEAdGHxPpDmfd4uH8C7eLQ0DUMQ5LU6Kr6DyhMyaEy3fuhL+kMkoWUlSjcFa1ea1GKT9Ja1pVh+zmLQSlZOVRS7FDW8fOLvs4goSeIfzc/GKh9ImBmzZsgSpS5jIUDlSTUkMCQGFtTHLhf+zfydWXyaL77NqK8NJWuqlSUKJa5KQT4vWM7+loZVUuZQf8A/IPzMadsiR2ciWim6hKfIARln0szs08p4Skes1X5ReDzk5fKSeBTRI4JAHpEP7SYRK5ozfclFXqeVqCJ7C0A+eMQPtMk51G32Q63XHSuzGXRYsInKgHkLiI3EF9qYT/T+JQ/KJXDTSAIilB9rYQPon8ZiGuy/Y1dIOsY7tGUUbSXNSrKoYnRhTNUHWtfONoSkdYpJ9kZi8WqasoEszjMu5IzOAzMH60jlxTSuzWcbot4MZV9I2B7TGFLkbruOLS41heVIJLACpJoIybbGME/Frmp7qnCeYBlpfxZ40+m85Gbykb7G4Qy8dKGY/fuSfuK0eNa7IkO9Izn2ZQfr8qmi/wKjSU8IvO6kGFeEw+ZImzJswibMH2igGWoNvHnGifRXhcsmem7Tbn9hEUzAoGZfNavxGL59Gx+zxFP8f8A2IjTP+mZYvOGfSFJB2fPFLJH8aYyOXsCWRaNt9o9nHEYeZJSoJUtqmoopKtK6RT8X7HzZMpcxUyWUoSVHvWAelOUZ4JpKmy80W3aKz7JICVz0iwKB4ZIsM5ZCFkGySfEAmIL2ZP2uI/aR+GJrF/3Uz9hXuMdZzlf9jsTMUZiZiipgFB6s7v88osExAZXT5+ecV72TVvr45A/nFkvTj8/lCGS30XgnAJ/bX7/AOcL+kRH9nR/mj8K4H+ilY+opf8ATP8AtMH/AEgkHCjlNT7iPjHL/L+Tp/j/AAUSYdwjik+4ROjYu0VOrD4lpZUpkkIocxzByn9J4gZg3R0+Eah7JB5A13j6sfjF/UycaaM8KuzMtrYXEy8RhPrSkqWVLqAkMMpYbtLuX6xNShD/ANJEtsXhD+s3mJsIFNIeN3BDkqkVDDSMuL7Ry6pq0+imHSkWZXMAxWpjjFJ4dsfVx74s0ya8VJExZonsar+zYYcEe4kHXkzxZAWLgU18r8+HieEVf2HA+qSnOsxLUqBNPuoPGJ7CpeWJamKkpDt5UiI6E9kBtrBqM5Z7RQtSp0HOOiUxOFlqU5QFEgVJvQc46MnjtminoOSsMVDeICiK9aA+LQziZoDJVcsLXYEnoGBvwj3RZ1yserEgPr3oa2hMAlqdwwv4H58Y2fRmUnZA+wlv/wAtPuGsSWHnIAIKhXmx4O0A7OQ0tCf1APRozv6R8KmZjkjQSE/imRxYoc5UdmSXBGj4z2lw2HlkzZyEs4bMCo9EipjIfaDHKxS1z1Ap7RaEoSbhAICQeZqfGEYbZaEl2EObTG6gD/mI98d2LCobOSeRyLvhU0iF9oUuuY4LiWkeqzFkw8rdDdYrm3pZzzRqyQPIH4wRexyWifFhQxF4dL7YwwZmSPRUWBeEs12iCwCD/wAZkDUS/wAj8YhyTi/6K4tNGs5NYrOD9tZC8UcKUrSsLKA+VlEEijKJq2oEWYiMrwEsHaILB/raj/GqOTHBNOzaUmqNB2/slGKlGVMKgDqlRDHQliyhyLiMvEgy5plK70t0+ShbqzxsJjKdrr/t0/gFf7o3+llujLOtWd7Mn/4ijov8MaUVRmnsx/6ij9lf4Y0loX1HnLweQx3BKLq/bV7zF9+jUbmJ/wA8/gRGf4BVz+sfxRoH0an7LEce3P4JcdGf9MwxecsW3drpwshc9aSUoYkJZ6kCjkC54xQ9r/SVInSJspEqeFTEKQCpKW3g1WWaeEWr29D4GeD+p/3ExmmHwqQLRjgxxkrZplm06R77Lj7TEdUfhiexg+ymfsK9xiE9nqTsR+0j8MTuJU8tf7J9xjsOYrPsoodov/LFusWcCKn7JK+1Wf8Apj3xbxCGE/RTOAwTf9Qj+FH5xKe3pfCGllo/EBEH9E6/7PMDWm//AM5Xz4xPe3p/sMw8FS/+4kRyP9X8nV/F+Chyu6Onw/lGlew6z2BHBY9ZUo/GMxlkKSK6f19I0r2AIOHJ/WR/2ZMafVLwmWDsgvpST9rhFf8AVR+Ij/dAqNIL+lm+FP8A1QfJaP8AyhpKKMOD++JxPwIuS8RUMdLH1kHXtkuOPd/OLDObnEFtVBE9XKcj1CB+UWXF4U3Dxq5IzSey0/R+hPYBanBE2ZLT0Kgrr8mLAvMJhJUl70rQKKbcnAiA9gZrYWaNUTS1HuiWfj6xZ+wKS5JIUsuLhiaU5PfxLtGbVhYHNlZi/uFLaR0SMnZyAACPXy0jon7bHzQjDncDnMrI5U12AD2vWB9rKH1ecprS1K/gr5Q3PxI7CYynKJZSTxJSguG4uPGE7eB+rTgkEq7KYlhU1QSOpLDzjREldwRGUVsBGf8AtqHx6+UtA/EfjBiPb4BLfV1W/S/lFfx21O3nrnKTkcJDXsG0EZfT45RlbNc01JUhaRrEftkbsv8AzE/EwaMWjj5A/lEftScFdnlekxJNGpXj1jss5jScDMC0JUnUAwNi9iCbMzuobwzDjl/kIqWzNvzJL5Uul3ynTo1vWJFXtetv7n+P/wBsc7jJPR0KUWtl0WQEl7jXyio+zs8TdsS5iapUF5eiUoSCORYnxiG2jt+dOcEBCD3kpLlQ4FXDkIf2BtBSMZKmJR3JagAaAk5XF+FfCFw4xYOfKSo3HxjMNkkfX0l//qVe9US6Pa2eXyypf7384rstSkLE4MF9p2nJ3fqzxz41Sdmst0astUZZtRP9uxHV/UmJZftbiD9yVXiT+cV7aO1ScSZs4JTnSnuAkFnGr1t5Rr9OuMjPNuIf7J/+oD/LX8I0Q9aRkcnbYkz+2lATaFJBdN21I5RJq+kKYzDC/wD7P/ZF5cblK0LHkUY0yB2cd0nmffGh/Rn/AHM//P8A9kuM/wBmzZaZbKUAeb/lBWxPa2bhgtMlCVJWvNvA3oNCNAI1yxcoUjLG6lbNG9u//kpv+j/uIjO5YoIf2p7bT8RLMlcpCUKIzFOZwxCqOeIgE7Rls29+7EYYuKplZZKT0J2RNy4icn9JiPAD4GLA/HhFMmzQVqWkkEKGUkcEpiUw23yAy0PzFI3syJbB4OXKJKEgE/OukP4ueEIUo0CQT8/OsQi/aHhKJ8REZi9ornEBbIRfKHLnRy1YQy7fRUoJkTX/AOb/ALEflFt23gU4qSqSoqCVEVTcMoKDOGumMr2B7UKwiFIRLSsKUVuSQ1AKBuTxK/8A+izv/t0fvn8o5p45crR0RnHjTJmZ7Iy0f4qh1avpE37BKHZTQDZYFeSEj4RQMX7ezlAjsEpfUKNOlIP9mvamdIQQnDCYJhCye0ysSLAZSSIMik40xRcb0Sf0vVlSSLhVOuaU0K2fPE2Wlaa5gD8+NIhfbPb6sRJAVhzKyrSXzZgd5JI7oqyYr2zPaBUgkoG6S5QQWfiGsYeOPgoJS8RccZsTPN7RyDmBI4kM3oBEjiCySNQL2ion23f/AAVPyUPyiPxvtPNmulKOzBoSDmURwBoB1qYHCT7HziujTfo5xOf6wkAMZhZWrhMsBj4Exe8JPJTmLEKLpy8Gp7j5xmX0UoUpClJSpIE1LaUAGYB70UE+MaLKmZpKgkKQUpIaxSWdhoWBFbQ+mZPZGTNrzkKUlCHTmJBIYsSS3g7eEdDG18DPVOUpD5SxDLA0GhEdENyLpEjOwEsyky81ClDm2YAyw/7RDDxEEduCXBpnI8QGr5QycikksXCBMaz90pAsD3GgictyAKVNWpY8Ysgy/wBt/ZQgqxGHS4Kz2iLVzqAKXo1Kjx4xVE7Mm1JlmgchwaecbbicOVIMsmrgkin3iTzYsR4xV5mzkvMUQwCSnwBIfxFehgtjRnaNmzDMydmApnYkWdtIdnbDnKpkl6/e4dBGgJ2UCpJbfSkB70NVV6gv0jyVhRmGYBKsyxWpUEnTzdoXIdGdzdhYhAzEJNAHB49WL/PRudsXEhyQkAGrrHLh1EabPwCOzOYjKMqiqgGV3CibMWvy8YcGyRU3ZTa8j8QIdgZan2cxLmiaFu9yppr8YKwexsQFvukoOinuC4FGsT5xpcrZ1Cf1uVWOvlD2H2ZWwDnTWl39PAQN2C0ZtPlzUkgoYgt3knR/0vmkJRLnKl5whSkjUHrYPWNFXsMLNUu5KuLkJyp04HzFLx4NjJyFIdKSAN3dAyuS2gByjmXieI+RQRs7ELAUEEjjmTw68/WB8fsjEEP2btzFjrU18I047OYoAYOsCj6IXQ2e1OmsIXst0zgUhlKOpZW6Be4t6RSVCbsyqTsfEs4kluqT8YfRsvE6yVcWce5+Uabh9mbuVQDi+oLfov4V5QQnZw6ivDjf0irJMqk4DEGvZKyh3toW48fdC0bBxBJUEAOSWeoevlWNHwezFMoVTvqIbgSSOorxh1Gy6mv8mb31+RCQzNU7DxH6A/eHxhqfsLEAf3bngC54WjTzsx0sCH05W5aQs7PBZ7lykdBzHMQ7YjJzsPEgUlO9e8nyLkcIbTsjEn/C/iR/5RqidmkJIDKZRoOanA5bpEd/wirhnsTY0J18fSDkwpGXHYeKt2J/eT/5Qj/gOLP+C3MqS3jvRp07ZbCrWCa0dykeFPeIWvZhJUcocUTR3cJLt190HJhSM1Ps/Oykdm+W7KT1487QOrYWID/ZW/WTT+KLvtySqUZRQmq1pKmc1KWIYhi+b+E+BSdnKVmBBBCAWfinlfeBH+mJ5MujOF7Kn0zSyEuAS6etADwixnGlKM/ZkSzQFuBAt4iJfauy1HNISHUlGZKlaklaQH5ZtdWGsRsrCkhCFS1ZeySsK3qGgLnjmelt2msRN32VHXRGbYwc+aRllEJAfRzVvS3iYiEbLn5lJTJVutmsKmxqdeXGL7LTNSoDLmJAQakgkgkkBr922rwMuaJMyYtSFUCCKXLLQ3mYE0DTKJN2Nis4SZSnylTEiwoTeDdg7InTJmRKCSTyp1e0W6bOUrEyiZamZYAIYqzKZJALXIArweJjZilyMQVTE5s2RlCpFCNSXNWNdIfImi0bB2eiTJQgIyKSlnu4zVVR6KJJI58niWw0wZlEd0sHs5GYE9KAPyiGweNbELC3GZKRLopThClZnAFFfaJLflEnsgnIM7Zs67aOpRa3PhqIqJDEYrAylqKlKIJuHIsGt4R0OYqeyjU+XLqI6E6AQuWoyAASCEpqL0IJ82aFzXZgxJzEA8d4iEysQFHKmySkHhc+oKSGjzDzUzWy0ZSwPA5T0uDFAeLTmdjYpt1dujH1MAYrDhWdge4pLjRyyuRZnESGFWFIStIyvUDxblw9eUekpVmQNQX5ZioH3GEBH9iDa5Qi9u8b+sIXgDmCy5Ke0AGrEk0IDggAeAg9UpYSA6QQEAluDZmOvLrHkxQCgLUU/mACeRvAMjMRs1CxNl6mWgNmZgVLNCxsXuDZNOJScAAMoDnOCnNcDdzEHo/ugjGJEpC5oS+VKXTZwCpvxeghyQXCFZSHdm0cBXw84AAJWzlgZQopAmqXWpKczt4kk3gxEjeSHA727x9dG4QYhVgKuTarVN+FvOkOSki/AUOmnpaGkKyJRhS5WhVipRFQ7JCcvC9X5w5KQQlWbUnKWDNlcE/OkGSQjIVkgJYhzuuHygl2Y0HkIVjl5ZS1AAkFgDxon4wUBGzcZKKkhKq9oG0ulqce87QOraBdYKXaeEDMMvACr3ex5+MSWJ2SlS0qZKcpzWoSA1nAAt5GAsXgZq1KBypUpTpDnRlZqO1SaGIbkikosc2Ph3StT1K1FuDn3NToIJRhwOpNj1fXhX1grAYQIQnK4cVBrW5eju73gfCynmzSpiAUEB3Y5VBVNHSRf8otaSJfbEjBVTUliohy5rp0qR5R6qQ9nu3qPnwglIClMlQdJZQ4btBxAN/6QqdLVnTlFCFV/W3crjWmaKECFKQHNgW9W98cmUCAWYgkN0cOfKDVSSUMblLEtq1wPWEB3WMpofPNUkcgSfKkAgFaGJLZUpS/W9B0b1EOCS5BpX1o8FTcPmIILU6u+hHze8cEKOQkMXdXLdNoQwKfhUKGVVcwIbiP5cenGHOxrBYueRb0H5w1NIzByASwD8cqj7gTThABXPaLZ6lJl5GDTUKVV9QmnEh3blrWDJuGVlVbMbalI0trU9HF2hpW0CVS0k5MxIykcFsGUzvQvXQcQYkZ03Kgqayc5JewD1YXqadYi7LI3/hZSHcFQzAGpNVkpDvYHTi1mq1PlOmYyCSCWAILkNQNo70cW5xMzTUNotlOKVevmR8mIDA7RKgkrfKUETCKOtJQElLm4D0F6wnXQKwv6kzuApnYi9vu1+XhnFbJ7RKgUVJS1bMxvqH0684MmT2mIDsN96sBukuaXdrtePJO05aycqnqkgi12I8PSFoexhWzx2valszFKNQaJNOYIVzZ/Bc3DvNSsgKT1tQ/PUw9Mx4RLTNWz5gFZU911DOTc0rDmK2imWuWkBw5CuI3XpcNW3KHoWxacMe3lKy0EpQ5AlSCaDXnBeJChLJSoZg6gVDmo1s4HDlAmC2qiYsAVOUKT0JDuTWgY6XtEnImZrA86gtXrb1i1TJZ4ZL1dQfg0dEUcZJXvFKwT+q9qCyuAeOhckHFhC5a/uljnTWgBAW7U4pU3gY9SCkOA4zLWd0vUqIZrli0KlzMrBTOSxYs5yp0JvTyhhM5BykKZIQp1cUpUkedT5wAJ2MkiQhJ3TR2sACT0qKHr0hzDoIoS6jmJ0cBZIZtC+nKHZVEyw5IoR0DUPKohsrAlZio7ssKJa4F3Gjta8CGI2qJglrVLBzgJyBncpUT5EU8OcKxCViXVIzlIBbrvfL++HVupedC33QnK+6XIUpVNcpAB4uNYSpRQ68xIyME6ONbXLgVPGBoEMysERnQopmJJQClT2KiSKuDQ0DcqXg5J7oehJZ6EkOeFmB8xaEKQFgEOyikGgcggGuoa9OcODeZjR1A+qaW115w0qE2NS8IoJDKJYrJpUhQUzc3KT4GG9jJUZaVLKt5wz91lEMOVLRIJn+TBi7OS1vMeMKVNbNoEh9fPp+UFILILD7PUkrRvZFUIIegmKAvxDViaQijG5W5ZhqPy9IY7MqXmCiCclDwG8R4h+d+MFTFboAIBJprVy1+NDBFUDdg6UFbhRO6pwoWU+jWYc6W4QNs2QSiYJhcdorvihANz4+6HhjWWhFSojMTYMApw5F3AOl4WucUqlhShmIUl2cZ90n0CvjBrsNjkoLdTmjsGc0YEn8ukJSBnUkLAIKVHqUtUaUAPTzheLzCWoJZSggsFalizsLE6RxO6FhIKiEP0eteQUYYh/KWo3H4+945XEcR+UeZWLgm/XTnWOlPV/0i1eNfyihCZi/fdxdwEjxf5ePEIZSnchRfpupDeLGFLnVVwAd/N/JhCJ5CVS6EuoopRnSSS3+gDxMACJ4XnlkEM5CweDEhubgeZhS1HMyRwKjahcULMTT519xc8JTmuygC2jkD4wpVXfrRjQVBtc0py8SgGsySV8QQk9WCh+IHxgbF1Uks7KS5AtVQB5CpB5PDknDpSqaoO62UdagBNAdLV5mAuwQCg5TmzIBUFEEkvXiepazcIhlIVNmSipKioFORRCqFNwk1Bu7NBOKCcqkK++hT3ZgAD76eMQWDwSTIWZZG9mBDg7unGzCtYmFzApMpSmZW8RU2STRuZFISdjaPEKYCgKk8y5plBoKu9jxiKQhHZ5EBu64dqryqNSLXNG1h8lQ7aysqgdWqJZIa7AAHlytAW2JDSlEEqcAV0I7hDUAYGoiZMpINmy+1UC7ZVKckcEqBcigbn/Rc5cqUl6IDpd+pHm56mHJhJKil0k1odctj40iM2rhlzCtOWxlqS6glJqTUAOC9+oiLofYZi5CCEC+ZYvUh1PbhVqNrBU7CjOg0SEkuOu6l20IiFxmdJAQpqlY5F6E8nMSawBNyqU4VvhNw4AJVx1a+ohxaroGh/C4GWkqSycqAndoMpqWPkC/MaQ7JxKZgX2Zo+RxVIYPTlUesQqMMUFSkgBRIegZjmNKguxr0FLmEYSZMShQSWBU4qxpLTYh3sbNQaw/uJC4WCz8fhJCuyU5UhgSMxDsCWI5mOitYoqmLUvK+ZRNn15R0RyXsXxNGlVKCAbnmSMtz0IA8RDKJASZbUyy1ZuQUUlvFQPQJMPynJqohgo0FQCABx4E+Ahc5w5auUJLW1IbzMbmIPslQCBL3vssqDW/2aVX0L+4Q4ploUGcKyNo4Nbvdjbk+sOYVCnLs/aVKdRkSz82Z4BV/dTUymKgEhIo4LAJJejgvX9RrwASLolJTLFEulCa8TRvI34QHjZiUpSsvvaUqygqgNyW6l26PLUopQCMy8yQpQard5Q5X8zDWLwyZspSFuUqSX0Nwxc2NPfAB7iNoBM1ASl8ymVR3BZKT/FwNIdk4h1CjJEt+ROYOx1b48Ycw7JAQBRJIu5yhqvU6j06QNnJCSlzmSUuHZO4S/wC8G60gAO7YbwDukpFXJqxLDo9qbvKj65Scqk2BGX95/VyYESVpGYJGbIkEUBJpUnkHp0gmYrIFKKqd400TflYQxDYRkSkOSQwBbkKl/NuUN4eT2kpGZJJSUkA0YpcpJoC9Od+cJwk2aorJYJz7oJegSa+iS3F4JSFKKD3RXMnR6AD3wIYiVjkqWUtvpVle2gt7odmDezBJOj01YHXg3kfEJKt/PLQ+Y5iQ28zo3S7GgJbnzpISll6hs2g0LF3MCdiZHPM+slTlMrLlJe6j3SBrf1GsG7MYoAFUg5Qbu2rv79RHsufmWUsd0tYiwQf9w9YcSAlRAAa4tc/1fxhpA2eypzs5AJJo7WcUGtoU7sGGh6M3O7P5QwuYapTTdJBajvT3u0NnFAjUMoPR+84NHsH14Q7EEkhQu7gg18NOEcZ2W/EC3EsPeIYnzcikH7uYhXJ+7bmR5w5mSxNGZ/JzfheAAXb1MPNIIBAzaaEH4ekPT9+WRqtBYi4dNGaj9I82jK7SXMlfpoKXILVduoc6RHrnKySmDKQkpzWAWEzEJ3QdVCnIxLeyl0FTJQoVEkixZVTUKcWUDfhrAOPKyqXKSoZXTYDRQSApL1AOU046Q5hsdKHLO51FXCmculITVi7UbqJNxkt0zypSijtEEV3mVlUNAzpJ0DjzltUNJkhhkkAArUontHYskjMXNaJIdqXu3AVCypK8xyqzKQmh7gUkp3RxCg/UdI8+uSpgSUAZVEsQ6SSKGhAKSCSKx2DxYXmbU5lAnupSiWDlZ8zlJao14QrXQ6HZoIM1+7nBLCzS0lxR6s1TEdtTaJ7NglyqWsJPeCWUzpYipBCnsKcGj3BqSVlOZKiCAHOVZWmWkBaHI1JctVnegeI2xhZfclIVnVmcEllOxarHR8opQ8xEyZUVsnZu2U5ikF95IAaxUHHHQcTaCJoIzLSSSwUSPvNXpQRB7OwqZi1KKsp7VCsgSX7rO4HCg4V5RLTpyVryKGYAJUGJ+6S1GYlwDWnWIu9sbVdA2BR2s1bgkZVpDd1gsXej2PjBGLQTM3wMxSpOdIyskAEvwLkehh5O8skGuZxfRQuGo4rVrwQiQgGYEoUN/MQNSpKXLg1Bsz6xUY6Jb2QUrDzGSStwkJSoE7ves2l2vw4R7g1KRmQlCmcoS7d7L3gWzXcNyeJHFS5KlhBUlLMoju0fQlqkpBexY0gPOnKFKDFxlAJ3FZWIBa160iWqKuyurdJUns1FlEOLUJtyjoZxyGmTAlalDOreFjUv6x0HEdl4nLKVFTf4S1Ct2KadB8YfwysyQXUkKlJpqAxq413hbhHR0b+pj6Hglhlsqi1qen6pTxe6HiKxGHQhBS5lrV2ThJJSSTYAWGYtHR0JgiWn5TmrlZYzZXDOzMRVzmuLZuTwDtDAmYkyyrdWECjhgPHVRHG/l0dDBBgTlALnNvpT+64sR91AD8ruYalzUypCSX7NMsq5nulz516x7HQAe4TGKX2pSpw6MqmqAq9CLgQb2QmJXqFkhuDbpr1BrHR0EdoJaBkqSTJCCUgTFBxRwlC0+NAB/SC5uIAUQWYS1K8iM5PR0t4x0dAnoGtgOy8KGQ5qRoTRhYcBcsC1YkZWIBU2beSreDG5T0ZgCI6OgToHsUGUsF2oSzfrJYv/AKfUQ6oHxry6V9dY8jotEsZE9Ks6f0RXlyt8tHiDRXRqtwcWpzrWukdHRKYxMwMVsSColTmrMlI42ZIHjHmJqTLIpMQoUNr08lXHOPY6GwGsDiiqXJmKDlaAfEpB8iQfSIvZq5hRL7SWDPDMokKcBRJcvQsVA3uL1jo6M2+ike/WBdTgIKrniHBo9XD63gedJVMnTKkpMrM43SFJKVJLcC9RV3sI6OiE7LY9jMIULBsgLUoJBJAzJLZT1HAcY7DKWoqmIQkJKEKzFRJzAKBpUqfLcqHjHR0P99C/bZDyFk9k5STnSVFmFU5E7vEs5U9yaWaUXK7igAGWo9e8w6R0dGXZb0Nduc8xQZwJbBNHzZm7wLWJhc9ToBrmVLLkMQlg5BerXFHtHR0VQrJEYtAWjMq+6lgQ5JS2vy0CTVIlqQgJOVZyZQ2iBUg0tlrfnHR0XdomtgiSPrS0MxQiWkJAfOxJYElkliL8DC5+IlpQUpv3mI7oDvq2uhNzwjo6JnpDj2VdSkkq7w3lUSzd42esex0dCGf/2Q=="
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
									</Card.Body>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="0">
											Click me!
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body>{iterate(element.techStack)}</Card.Body>
									</Accordion.Collapse>
									<ListGroup className="list-group-flush">
										<ListGroupItem>Cras justo odio</ListGroupItem>
										<ListGroupItem>{iterate(element.techStack)}</ListGroupItem>
										<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
										<ListGroupItem>Vestibulum at eros</ListGroupItem>
									</ListGroup>
									<Card.Body>
										<Card.Link href="#">Card Link</Card.Link>
										<Card.Link href="#">Another Link</Card.Link>
									</Card.Body>
								</Card>
								{/* <Accordion defaultActiveKey="0">
								<div
									className="card border-3 border-color #ff8c00 mb-3 "
									style={{
										maxWidth: "20rem",
										maxHeight: "100%",
										borderColor: "#ff8c00",
									}}
								>
									<div className="card-body">
										<h5 className="card-title text-center font-weight-bold text-monospace">
											{element.title}
										</h5>
										<p className="card-text  text-right text-muted">
											{" "}
											{element.position}
										</p>
									</div>
									<ul className="list-group list-group-flush border-color #ff8c00 ">
										<li className="list-group-item border-color #ff8c00 text-center ">
											{element.desc}
										</li>

										<li
											className="list-group-item border-color #ff8c00 text-center "
											style={{ border: "inherit" }}
										>
											<Accordion.Toggle as={Card.Header} eventKey="0">
												Technologies
											</Accordion.Toggle>
											<Accordion.Collapse eventKey="0">
												<Card.Body> {iterate(element.techStack)}</Card.Body>
											</Accordion.Collapse>
										</li>
										<li
											className="list-group-item border-color text-center"
											style={{ border: "inherit" }}
										>
											<Accordion.Toggle as={Card.Header} eventKey="1">
												Management
											</Accordion.Toggle>
											<Accordion.Collapse eventKey="1">
												<Card.Body>{iterate(element.otherTech)}</Card.Body>
											</Accordion.Collapse>
										</li>
										<li className="list-group-item text-center">
											<ul className="list-inline ">
												<Accordion.Toggle as={Card.Header} eventKey="2">
													Challenges
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														{element.challenges.map((el, j) => {
															return (
																<li
																	key={j}
																	className="list-inline-item  border-color text-left"
																	style={{ border: "inherit" }}
																>
																	-{el}.
																</li>
															);
														})}
													</Card.Body>
												</Accordion.Collapse>
											</ul>
										</li>
									</ul>
								</div>
							</Accordion> */}
							</Accordion>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
