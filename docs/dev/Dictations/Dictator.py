import re

dictation = "Raw land overview cash raw land is land which is been cut but not but this not all the slash has been removed there could be still some slash there could be some Slash being removed but not all of it $ RawLand is typically slower than prep land unless the trenches are f**\*** $ RawLand there's always raw lands in the perimeter so when a planter is performing a perimeter Cover algorithm then they're planting Raw typically in raw the spacing can be more responsive usually in raw they they Checkers the checkers will prioritize stumps over anything else $ they say that rocks heat up and kill the roots of trees that kind of seems like a bit of a myth or I've never seen any evidence for that and I don't even know where to look that be interesting thing to find out for the research section of the development page is $ where do you find these questions like like Jay root b**\*\*\*** or planting beside a rock or yeah I don't know yeah raw land so RawLand also has riparians are considered raw land repairing land is land that legally I believe or probably legally that'd be interesting to know if it's legal or not that be an interesting section actually too with the Eco part of the the Eco part of the Eco module of beta has legality issues meanwhile move and root don't have legal issues or at least there are way more flexible I guess root does have legal issues like there's a defined spacing but then again the spacing is flexible it can be changed by the checker or by the supervisor or by the planter it's kind of up to your own discretion that's something that raw land has a lot of is decisions there's more complexity so I guess you could say that raw land is doesn't necessarily have to be more difficult than prep land but RawLandis definitely more complex there's usually more slash so that's like there's something slash ads difficulty in the third dimension so height vertical dimension I guess you could say cuz x and Y are horizontal so Zand up I guess so depth and height are the vertical dimension and there's more information yeah there we go there's more shin and entropy in the RawLand because there's just more information to think about especially because you have to think about more precise microcytes typically prep land there's like a huge huge that's pretty ambiguous typically there's the microcytes are smaller in RawLand because you have to screech through stuff discreet actually come through here screef there we go yeah so screaming close enough I should make a frequently wrong words for the large language model that's listening to me right now I wonder how I could make like an error page or not error page like error list it would be addict which makes sense it would that's what actually yeah there we go that's what the also known as list or json it's not actually a list it's an associate of an array also known as a dictionary the key will be the word that I actually use or the client beta or f**_ the word that plant betta uses and then after the semicolon it will be or after the colon it will be a list of all the words all the value no all the strings that actually should be f_** the list of the words that are also known as the key which is the word that I actually want to use which is a very circumlocution way to say these things"

Homonyms = {
    'cash': 'cache',
    'narrow': 'neuro',
    '/': 'slash',
    'planetary': 'planter',
    'Roland': 'RawLand',
    'Rollins': 'RawLand',
    'screaming': 'screefing',
    'Jay root': 'Jroot' 
}

dictation = dictation.replace("$", "\n \n -")

# If the key is in this string then replace it with the value
dictation = dictation.replace("cash", "cache")

print(dictation)


