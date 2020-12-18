import * as React from "react";
class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            like: 0,
            dislike: 0,
            likeActive: false,
            dislikeActive: false
        };
        this.fetchfavor();
    }
    setLike() {
        this.setState({
            likeActive: !this.state.likeActive,
            like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
        });
    }
    setDislike() {
        this.setState({
            dislikeActive: !this.state.dislikeActive,
            dislike: this.state.dislikeActive ? this.state.dislike - 1 : this.state.dislike + 1
        });
    }
    handleLike() {
        if (this.state.dislikeActive) {
            this.setLike();
            this.setDislike();
        }
        this.setLike();
        var data = { flag: 0 };
        const fun = async () => {
            this.state.likeActive ? data = { flag: 0 } : data = { flag: 1 };
            const reponse = await fetch('http://localhost:4000/addL', {
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: { 'Content-Type': 'application/json' }
            });
            const jVal = await reponse.json();
            Promise.resolve(jVal).then((value) => {
                console.log(value)
                if (value.length == 0) {
                    alert('Error, cannot get like data')
                } else {
                    this.state.dislike = value.dislike;
                    this.state.like = value.like;
                }
            });
        }
        fun();
    }
    fetchfavor() {
        const fun = async () => {
            const reponse = await fetch('http://localhost:4000/favor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
            const jVal = await reponse.json();
            Promise.resolve(jVal).then((value) => {
                console.log(value)
                if (value.length == 0) {
                    alert('Error, cannot get dislike data')
                } else {
                    this.state.dislike = value.dislike;
                    this.state.like = value.like;
                }
            });
        }
        fun();
    }
    handleDislike() {
        if (this.state.likeActive) {
            this.setDislike();
            this.setLike();
        }
        this.setDislike();
        var data = { flag: 0 };
        const fun = async () => {
            this.state.dislikeActive ? data = { flag: 0 } : data = { flag: 1 };
            const reponse = await fetch('http://localhost:4000/addD', {
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: { 'Content-Type': 'application/json' }
            });
            const jVal = await reponse.json();
            Promise.resolve(jVal).then((value) => {
                console.log(value)
                if (value.length == 0) {
                    alert('Error, cannot get dislike data')
                } else {
                    this.state.dislike = value.dislike;
                    this.state.like = value.like;
                }
            });
        }
        fun();
    }
    render() {
        return (
            <>
                <button
                    onClick={() => this.handleLike()}
                    className="grey-button-like"
                    disabled={this.state.dislikeActive}
                >
                    Like( {this.state.like} )
            </button>
                <button
                    className="grey-button-like"
                    onClick={() => this.handleDislike()}
                    disabled={this.state.likeActive}
                >
                    Dislike( {this.state.dislike} )
            </button>
            </>
        );
    }
}
export default Buttons;