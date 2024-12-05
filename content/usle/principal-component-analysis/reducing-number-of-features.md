---
title: Reducing Number Of Features
description: In Progress
---

I hope you enjoyed the videos on how you can build your own recommender system. Before we wrap up this week in this and a few other optional videos I'd like to share with you an unsupervised learning algorithm called principal components analysis. This is an algorithm that is commonly used for visualization. Specifically, if you have a dataset with a lot of features, say 10 features or 50 features or even thousands of features, you can't plot 1,000 dimensional data. PCA, or principal components analysis is an algorithm that lets you take data with a lot of features, 50, 1,000, even more, and reduce the number of features to two features, maybe three features, so that you can plot it and visualize it. Is commonly used by data scientists to visualize the data, to figure out what might be going on. Let's take a look at how PCA, principal components analysis works. To describe PCA, I'm going to use as a running example, if you have data from a collection of passenger cars, and passenger cars can have a lot of features. You may know the length of the car or the width of the car, maybe the diameter of the wheel, or maybe the height of the car, and many other features of cars. If you want to reduce the number of features so you can visualize it, how can you use PCA to do so? For the first example, let's say you're given a dataset with two features. The feature x_1 is the length of the car, like so, and the second feature x_2, is the width of the car, which is measured like so. It turns out that in most countries, because of constraints about the width of the road the cars drive on, width of the car which has got to fit within the width of the road of a single lane, tends not to vary that much. For example, in the United States, most cars are, let's call it about 1.8 meters wide, that's just under six feet. If you were to have a collection of cars and the dataset of the length and width of the cars, you will find that the dataset might look like this, where x_1 varies quite a bit because some cars are really long and x_2 varies relatively little. If you want to reduce the number of features, well, one thing you could do is let us take x_1 because x_2 varies relatively little from car to car. It turns out that PCA is an algorithm that when applied to this data set will more or less automatically decide to just take x_1, but it can do much more than that. Let's look at a second example where here x_1 is again the length of the car, and let's say that in this dataset, x_2 is the diameter of the wheel. The diameter of the wheel does vary a little bit. If you were to plot the data, it might look like this. But again, if you want to simplify this dataset to just one feature, you might decide, let's just take x_1 and forget x_2 and PCA when applied to this dataset. Well, again, more or less, cause you to just check the feature x_1. In both the examples we saw, only one of the two features seemed to have a meaningful degree of variation. Here's a more complex example. Say the feature x_1 is the length of the car, so that varies quite a bit, and the feature x_2 here is the height of the car, which also varies quite a bit. Some cars are much taller than other cars. If you were to plot the data, you might get a dataset that looks like this, where some cars are bigger and they tend to be longer and taller, and some cars are a little bit smaller. They tend to be not as long and not as tall. If you wanted to reduce the number of features, what should you pick? You don't want to pick just x_1, the length, and ignore x_2 the height and you also don't want to pick just x_2, the height, and ignore x_1, the length. It seems as if both x_1 and x_2 have useful information. In this graph, x_1 and x_2 are the two axes of this plot. Instead of being limited to taking either the x_1 axis or the x_2 axis, what if we had a third axis. I'm going to call this new axis the z-axis. To be clear, this is not sticking out of this diagram. This is a combination of x_1 and x_2. This is not a z-axis that's sticking out in the third dimension. This z-axis lies flat within this plot. But why do we have the z-axis which corresponds to something about the size of the car? Given a car like this one over here, its coordinate, meaning the value on the x-axis tells us the length of the car and the coordinate is just, what is this distance? Similarly its coordinate, meaning, what is this distance on the x_2 axis tells us what is the height of the car. If we're now going to use the z-axis instead as one feature to capture what we know about this car then is coordinate on the z-axis, meaning this distance. That tells us roughly what is the size of the car. We'll formalize this in the next few videos. But the idea of PCA is to find one or more new axes, such as z so that when you measure your datas coordinates on the new axis, you end up still with very useful information about the car. But maybe now, instead of needing two numbers corresponding to the coordinates on X_1 and X_2 axes, the length and height. You now need a few numbers, in this case, only one number instead of two, to capture roughly the size of the car. In the example, we've used so far, we were trying to reduce the data from two numbers, X_1 and X_2 down to one number, the coordinate on the z-axis. In practice, PCA is usually used to reduce a very large number of features, say 10, 20, 50, even thousands of features, down to maybe two or three features so that you can visualize the data in a two-dimensional or in a three-dimensional plot. But for this video, because I could only draw on a two-dimensional screen. I'm going to use mainly two or three-dimensional data sets as my examples. Let's look at one more example. In this visualization, we have a three-dimensional data set and notice that I can rotate the data set here, so you can see it in 3D. But notice if I rotate the data set like this, well, most of this data, even though it is in 3D, it actually lives on a very thin surface. It's almost as if all the data lies on a two-dimensional pancake, even though the pancake lives in this three-dimensional space. A PCA, what you can do is, instead of having three features, x_1, x_2, x_3, reduce it to two numbers, which we're going to call Z_1 and Z_2. When you do that, you can then visualize the data on this Z_1, Z_2 axis and this becomes a convenient way to visualize this data if you had to, say print on a piece of paper. I couldn't dynamically rotate it like you'll seeing me do on the screen. Here's one more example. If you have data about the development status of many different countries, you might have for example data about different countries, GDP, and that's feature x_1. In addition, Let's say we also have the per capita GDP and also a measure of their Human Development Index. The Human Development Index was developed to measure the overall progress of how well people in a country might be doing based on things like the lifespan and education and so on or you might separately have a feature corresponding to the life expectancy in different countries and so on and so forth. If for each country you have 50 features, how can you visualize this data because you can't plot 50 dimensional data on a two-dimensional computer monitor. What PCLS will do is take these 50 features, X_1,X_2,X_3,X_4, and so on and compress it down to two features which I'm going to call Z_1 and Z_2 and you can then plot these different countries values of z_1 and z_2. You might find for example that Z_1 loosely corresponds to how big is the country and what is this total GDP? Because larger countries tend to have a higher GDP, because large countries have many people, tend to have a larger economy and perhaps you find that Z_2 corresponds roughly to the per person GDP or the amount of economic activity per person. For example, the United States, which is a relatively large country and has relatively high per person economic activity may be somewhere up here to the up and right of this plot and a country like Singapore, where I live many years as well, is a smaller country but it has relatively high per person economic activity. Take on a lower value on the z_1 axis, but still a relatively high value on the z_2 axis. Whereas a country like this would be maybe a smaller country with lower per person economic activity. Whereas the country like this may be a large country with lower per person economic activity and a figure like this lets you take a large number of features, 50 features. Sometimes we also say that's 50 dimensional data. It just means we have 50 features and reduce that to two features or sometimes we say is two-dimensional data because you can then plot it on this two-dimensional plot like you're seeing here. Whenever I get a new data set, one of the things I'll often want to do is to visualize the data since that helps me understand what the data looks like, what do the countries look like, or what do the cars seem like in this data set or whatever data you may be examining. You find also that visualizing the data set will sometimes help you figure out something funny's going on in this datas. Something unexpected is happening. PCA is a powerful algorithm for taking data with a lot of features, with a lot of dimensions or high-dimensional data, and reducing it to two or three features to two or three dimensional data so you can plot it and visualize it and better understand what's in your data. That's what the PCA algorithm can do for you. In the next video, let's start to take a look at how exactly the PCA algorithm works.