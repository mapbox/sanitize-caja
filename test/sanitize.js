var test = require('tape').test,
    sanitize = require('../');

test('sanitize', function(t) {
    t.equal(sanitize('foo bar'),'foo bar');
    t.equal(sanitize(undefined),'');

    t.equal(sanitize('<img src="http://foo.com/foo.png">'),'<img src="http://foo.com/foo.png">', 'image src absolute');
    t.equal(sanitize('<a href="data:foo/bar">foo</a>'),'<a>foo</a>', 'data url');
    t.equal(sanitize('<script>alert("foo")</script>'),'', 'script tag');
    t.equal(sanitize('<div id="foo">hi</div>'), '<div id="foo">hi</div>');
    t.equal(sanitize('<a href="http://example.com">foo</a>'),'<a href="http://example.com">foo</a>', 'absolute url');
    t.equal(sanitize('<a href="https://example.com">foo</a>'),'<a href="https://example.com">foo</a>', 'absolute https url');
    t.equal(sanitize('<a href="mailto:foo@bar.com">foo</a>'),'<a href="mailto:foo@bar.com">foo</a>', 'mailto: url');
    t.equal(sanitize('<iframe><svg/onload=alert(document.domain)></iframe>'),'', 'iframe');
    t.equal(sanitize('<svg/onload=alert(document.domain)>'),'', 'svg');
    t.equal(sanitize('<svg onload=alert(document.domain)></svg>'),'', 'svg');
    t.equal(sanitize('<iframe>foo bar</iframe>'),'', 'iframe');

    var png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAeCAYAAADO4udXAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHFSURBVHic7dpBbsIwEAXQoZpbwKKz8Bm66EFyjUicI1KuwUF6Ci/cBbmFJbqoLbluJezgMSn8JyGhJMRAvmZiw+5yuRBAay/3fgPwmBAsUIFggQoEC1QgWKACwQIVCBaoQLCgiIiMIjKWHo9gbVy4oJ/po9e42fPiUBERcemBxpiD935i5qO19ly6rzUR+SAics69a46zFc65WUSIKi9sA2MYN449O+fm0hcXVyzv/UREb977kzHmELeHUJ3Cvqn0fDfYhwfoi5WqKlREFRWLmY8hQPsQroGIKG4jooWZjzWDw3VJG4oXtnflWqU4WNbaszFmSMMVdsVQDdpt8NmkoYoVI2lPPY0iQjVVa1f774ak9cV2pBqqcE91rfUtre+57jGuiIxJgFa3oS0orljQxU03zGv8NeNzzr3eet6qipVVqyVs7toK43S7xYffmmwpoVulysPV4rstnhXmoWLmgZkH+g7YPp8twnOrXW74UZ2stecsXD2WG55F1Ur3Wtmss1mFrF1u+LUImswWp07LDcv1Q/6n3u1dc9ZZPSuExxErosa9HIIFKvAjNKhAsEAFggUqECxQgWCBCgQLVCBYoALBAhVfpi7sxwlEhWYAAAAASUVORK5CYII=';
    var html = '<img src="' + png + '">';
    t.equal(sanitize(html),html, 'img data url');

    t.end();
});
