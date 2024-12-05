---
title: State Action Value Function Example
description: In Progress
---

Using the state-action value function example. You're seeing what the values of QSA are like. In order to keep holding our intuition about reinforcement learning problems and how the values of QSA change depending on the problem will provided an optional lab. That lets you play around modify the mars rover example and see for yourself how QSA will change. Let's take a look. Here's a Jupyter Notebook that I hope you play with after watching this video. I'm going to run these helper functions, now notice here that this specifies the number six that the two actions so I wouldn't change these. And this specifies the terminal left in the terminal right rewards which has been 100 and 40 and then zero was the rewards of the intermediate states. The discount factor gamma 0.5. And let's ignore the misstep probability for now we'll talk about that in a later video. And with these values if you run this code this will compute and visualize the optimal policy as well as the Q function Q of SA. You learn later about how to develop a learning algorithm to estimate or compute Q of SA yourself. So for now don't worry about what code we have written to compute Q of SA. But you see that the values here Q of SA are the values we saw in the lecture. Now here's where the fun starts. Let's change around some of the values and see how these things change. I'm going to update the terminal right reward to a much smaller value says only 10. If I now rerun the code, look at how Q of SA changes and now thinks that if you're in state 5. Then if you go left and behave optimally you get 6.25. Whereas if you go right and behave also the after that you get a return of only five. So now when the reward at the right is so small it's only 10. Even when you're so close to you rather go left all the way. And in fact the auto policy is now to go left from every single state. Let's make some other changes. I'm going to change the terminal right reward back to 40. But let me change the discount factor to 0.9, with a discount factor that's closer to one. This makes the Mars Rover less impatient is willing to take longer to hold out for a higher reward because rewards in the future are not multiplied by 0.5 to some high power is multiplied by 0.9 to some high power. And so is willing to be more patients, because rewards in the future are not discounted or multiplied by as small a number as when the discount was 0.5. So let's rerun the code. And now you see this is Q of SA for the different states and now for state 5 going left actually gives you a higher reward of 65.61 compared to 36. Notice by the way that 36 is 0.9 times this terminal reward of 40. So these numbers make sense. But when a small patient is willing to go to the left, even when you're in state 5. Now let's change gamma to a much smaller number like 0 .3. So this very heavily discounts rewards in the future. This makes it incredibly impatient. So let me rerun this code and now the behavior has changed. Noticed that now in state 4 is not going to have the patience to go for the larger 100 reward, because the discount factor gamma is now so small is 0.3. It would rather go for the reward of 40 even though it's a much smaller reward is closer and that's whether we choose to do. So I hope that you can get a sense by playing around with these numbers yourself and running this code. How the values of Q of SA change as was how the optimal return which you notice is the larger of these two numbers QSA. How that changes as well as how the optimal policy also changes. So I hope you go and play with the optional lab and change the reward function and change the discount factor gamma and try a different values. And see for yourself how the values of Q of SA change, how the optimal return from different states change and how the auto policy changes depending on these different values. And by doing so, I hope that will sharpen your intuition about how these different quantities are affected depending on the rewards and so on in reinforcement learning application. After you play to the lab, we then be ready to come back and talk about what's probably the single most important equation in reinforcement learning, which is something called the bellman equation. So I hope you have fun playing with the optional lab and after that let's come back to talk about bellman equations.