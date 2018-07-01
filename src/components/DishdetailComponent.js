import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return (
         <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    const comment = comments.map((comment) => {
        return (
            <ul className="list-unstyled" key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year : 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            );
    });
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comment}
        </div>
    );
};

const DishDetail = (props) => {
    const dish = props.dish;

    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />    
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default DishDetail;