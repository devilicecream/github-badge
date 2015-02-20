function GitHubBadge(selector, username, options) {
    this.$element = $(selector);
    this.username = username;
    this.options = options || {};
    this.buildBadge();
}

GitHubBadge.prototype = {
    buildHTML: function () {
        var side_class = this.options.side_class || 'col-xs-4';
        var main_class = this.options.main_class || 'col-xs-8';
        var $side = $("<div id='github-badge-side' class='" + side_class + "'></div>");
        var $main = $("<div id='github-badge-main' class='" + main_class + "'></div>");

        var avatar_class = this.options.avatar_class || 'img-thumbnail';
        var avatar = $("<img src='" + this.user.avatar_url + "' class='" + avatar_class + "' id='github-badge-avatar' />");
        var name = $("<h2 id='github-badge-name'>" + this.user.name + "</h2>");
        var login = $("<h4 id='github-badge-login'>" + this.user.login + "</h4>");
        var $profile_link = $("<a href='" + this.user.html_url + "' target='_blank'></a>");
        $profile_link.append(avatar);
        $profile_link.append(name);
        $profile_link.append(login);

        var followers_class = this.options.followers_class || 'col-xs-6';
        var followers = $("<div class='" + followers_class + "' id='github-badge-followers'><h3>" + this.user.followers + "</h3>Followers</div>");
        var following_class = this.options.following_class || 'col-xs-6';
        var following = $("<div class='" + following_class + "' id='github-badge-following'><h3>" + this.user.following + "</h3>Following</div>");
        $side.append($profile_link);
        $side.append(followers);
        $side.append(following);

        var title = $("<h3>Contributions</h3>");
        var $list = $("<ul id='github-badge-ul'></ul>");
        this.repositories.forEach(function (repo) {
            var repository = $("<li class='github-badge-li'><a target='_blank' href='" + repo.html_url + "'>" + repo.name + "</a></li>");
            $list.append(repository);
        });
        var last_push_date = this.repositories[0].pushed_at;
        var last_push = $("<p id='github-badge-lastpush'>Last push: <span>" + new Date(last_push_date).toLocaleString() + "</span></p>");

        $main.append(title);
        $main.append($list);
        $main.append(last_push);

        var github_logo_url = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
        var github_logo = $("<a href='http://github.com' target='_blank' id='github-badge-logo'><img src='" + github_logo_url + "' id='github-badge-logo' style='height: 24px; width: 24px' /></a>");

        this.$element.append(github_logo);
        this.$element.append($side);
        this.$element.append($main);

        var tail = this.options.tail || $('<div class="clearfix"></div>');
        if (tail) {
            this.$element.append(tail);
        }
    },
    getUser: function () {
        var _this = this;
        $.ajax({url: 'https://api.github.com/users/' + this.username,
                success: function (data) { _this.gotUser(data)}});
    },
    gotUser: function (data) {
        this.user = data;
        this.getUserRepositories();
    },
    getUserRepositories: function () {
        var _this = this;
        $.ajax({url: 'https://api.github.com/users/' + this.username + '/repos',
                data: {type: 'all', sort: 'pushed'},
                success: function (data) { _this.gotUserRepositories(data)}});
    },
    gotUserRepositories: function (data) {
        this.repositories = data;
        this.buildHTML();
    },
    buildBadge: function () {
        this.getUser();
    }
}

