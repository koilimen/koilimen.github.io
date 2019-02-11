---
layout: default
title:  "Ajax count down latch."
date:   2010-02-10 21:28:35 +0500
categories: tips-and-tricks
tags: javascript ajax tips tricks
---

## Ajax count down latch

Hello friends! Today i want to tell you how to make several ajax requests and call some method only when all of them will be finished.
This is not the only way  to do it, but it most simple, that I know.

So first we need to make a number of ajax requests. Let use Fetch API for it.
<pre >
<code class="javascript">
fetch('/path/to/res1', {method: 'GET'}).then(function (response) { console.log(response); });
fetch('/path/to/res2', {method: 'GET'}).then(function (response) { console.log(response); });
fetch('/path/to/res2', {method: 'GET'}).then(function (response) { console.log(response); });

function callMe(){
    // some logic here
}
</code>
</pre>
Now we need to trigger function callMe when all of three requests will be finished.
Simplest way is to make counter and invoke our function when counter will be 0.

<pre >
<code class="javascript">
var countDown = 3;
fetch('/path/to/res1', {method: 'GET'}).then(function (response) { 
    console.log(response); 
    countDown--;
    if(countDown === 0){
        callMe();
    }
});
fetch('/path/to/res2', {method: 'GET'}).then(function (response) {
    console.log(response); 
    countDown--;
    if(countDown === 0){
        callMe();
    }
});
fetch('/path/to/res2', {method: 'GET'}).then(function (response) { 
    console.log(response); 
    countDown--;
    if(countDown === 0){
        callMe();
    }
});
</code>
</pre>

And this is all! So simple! =)
You dont need to wait for all three request to finish. Now you wait only the longer one.
This is useful when you are making requests to separate sources and you have to wait all responses - for example in integration widget.

I hope this helps you, my dear reader. Thank you for attention!


