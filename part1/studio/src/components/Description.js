import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://joyfoodsunshine.com/about-laura/"
    let authorPhoto = "https://joyfoodsunshine.com/wp-content/uploads/2022/12/family-photo-square-32.jpg"
    let authorName = "Laura"
    
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Laura, a former chemistry teacher turned homeschooling mom of six beautiful babies! I create simple and delicious recipes that are tested and perfected to make cooking and baking joyful and fun!" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Joy Food Sunshine</a> 
           </div>
        </div>
     ); 
}

class RecipeDescription extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <h1>Chewy Chocolate Chip Cookies</h1>
                    <p>This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!</p>

                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;